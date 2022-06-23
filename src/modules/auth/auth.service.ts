import { Injectable } from '@nestjs/common';
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

  localLogin() {
    
  }

  logout() {
  }

  refresh() {

  }
}
