import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async createAccount(user): Promise<IUser> {
    return await this.userModel.create(user);
  }

  async removeAccount(user): Promise<IUser> {
    return await this.userModel.remove(user);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { _id, email } = user;
      return { _id, email };
    }
    return null;
  }

  async login(user: IUser): Promise<{ [key: string]: string }> {
    const payload = { email: user.email, sub: user._id };

    // const tokenOptions = {
    //   secret: this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
    //   expiresIn: this.configService.get<string>(
    //     'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
    //   ),
    // };
    const accessToken = this.jwtService.sign(payload);

    const refreshTokenOptions = {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.get<string>(
        'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
      ),
    };
    const refreshAccessToken = this.jwtService.sign(
      payload,
      refreshTokenOptions,
    );

    return {
      _id: user._id,
      accessToken,
      refreshAccessToken,
    };
  }

  logout() {
    console.log('logout');
  }

  refresh() {
    console.log('refresh');
  }

  async setCurrentRefreshToken(refreshToken: string, _id: string) {
    const hashRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.userModel.updateOne({ _id }, { refreshToken: hashRefreshToken });
  }
}
