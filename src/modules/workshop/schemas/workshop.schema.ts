import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkshopDocument = Workshop & Document;

@Schema()
export class Workshop {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  id: string;

  @Prop()
  lastUpdated: number;

  @Prop()
  html: string;  
}

export const WorkshopSchema = SchemaFactory.createForClass(Workshop);
