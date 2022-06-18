import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkshopDocumentT = WorkshopDocument & Document;

@Schema()
export class WorkshopDocument {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  WorkshopDocumentTitle: string;

  @Prop()
  summary: number;

  @Prop()
  menuSvgPath: string;

  @Prop()
  headerSvgPath: string;

  @Prop()
  categoriesLastUpdated: string;
  // {
  //   type: Date,
  //   default: () => Date.now()
  // }
}

export const WorkshopDocumentSchema = SchemaFactory.createForClass(WorkshopDocument);
