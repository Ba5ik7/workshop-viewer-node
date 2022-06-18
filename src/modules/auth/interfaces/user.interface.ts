import { Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId,
  lastUpdated: number,
  html: string,
  createdAt: Date,
  updatedAt: Date
}
