import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}
  
  async createAccount(user): Promise<IUser> {
    return await this.userModel.create(user);
  }
  
  async removeAccount(user): Promise<IUser> {
    return await this.userModel.remove(user);
  }

  async validateUser(user: IUser): Promise<IUser> {
    const userResult = await this.userModel.findOne({ email: user.email });
    if (userResult && userResult.password === user.password) {
      const { password, ...result } = userResult;
      return result;
    }
    return userResult;
  }

  logout() {
  }

  refresh() {
  }
}
