import { Types } from 'mongoose';

export interface User {
  _id: Types.ObjectId,
  lastUpdated: number,
  html: string
}
