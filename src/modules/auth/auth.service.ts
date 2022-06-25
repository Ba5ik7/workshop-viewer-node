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

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (user && user.password === password) {
      const { _id } = user;
      return { _id };
    }
    return null;
  }

  logout() {
  }

  refresh() {
  }
}
