import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkshopDocumentT = WorkshopDocument & Document;

@Schema()
export class WorkshopDocument {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  id: string;

  @Prop()
  lastUpdated: number;

  @Prop()
  html: string;  
}

export const WorkshopDocumentSchema = SchemaFactory.createForClass(WorkshopDocument);
