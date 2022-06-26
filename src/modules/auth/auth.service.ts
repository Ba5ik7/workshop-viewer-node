import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}
  
  async createAccount(user): Promise<IUser> {
    return await this.userModel.create(user);
  }
  
  async removeAccount(user): Promise<IUser> {
    return await this.userModel.remove(user);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { _id, email } = user;
      return { _id, email };
    }
    return null;
  }

  async login(user: IUser): Promise<{ [key: string]: string }>  {
    const payload = { email: user.email, sub: user._id };
    return {
      uesrId: user._id,
      accessToken: this.jwtService.sign(payload),
    };
  }

  logout() {
  }

  refresh() {
  }
}
