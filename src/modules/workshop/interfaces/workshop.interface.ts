import { Types } from 'mongoose';

export interface IWorkshopDocument {
  _id: Types.ObjectId,
  id: string,
  lastUpdated: number,
  html: string
}
