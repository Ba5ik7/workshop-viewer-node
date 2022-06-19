import { Types } from 'mongoose';

export interface IUser {
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date
}
