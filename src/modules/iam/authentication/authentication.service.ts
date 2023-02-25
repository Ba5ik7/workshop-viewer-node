import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoErrorCodes } from 'src/enums/mongo-error-codes.enum';
import { HashingService } from '../hashing/hashing.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private hashService: HashingService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<void> {
    try {
      const user = new User();
      user.email = signUpDto.email;
      user.password = await this.hashService.hash(signUpDto.password);

      await this.userModel.create(user);
    } catch (error) {
      if (error.code === MongoErrorCodes.DuplicateKey) {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  async signIn(signInDto: SignInDto): Promise<boolean> {
    const user = await this.userModel.findOne({ email: signInDto.email });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await this.hashService.compare(
      signInDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return true;
  }
}
