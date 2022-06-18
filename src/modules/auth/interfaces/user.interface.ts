import { Types } from 'mongoose';

export interface IUser {
  lastUpdated: number,
  html: string,
  createdAt: Date,
  updatedAt: Date
}
