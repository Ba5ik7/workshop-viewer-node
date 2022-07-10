import { Types } from 'mongoose';

export interface IWorkshopDocument {
  _id?: Types.ObjectId,
  id?: string,
  lastUpdated?: Date,
  html?: string
}
