import { Types } from 'mongoose';

export interface IWorkshopDocument {
  _id?: Types.ObjectId,
  id?: string,
  sortId?: number,
  name?: string,
  lastUpdated?: Date,
  html?: string
}
