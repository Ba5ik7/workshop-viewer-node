import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  id: string;

  @Prop()
  section_id: string;
  // {
  //   type: mongoose.SchemaType.ObjectId,
  //   ref: 'Section'
  // };

  @Prop()
  name: number;

  @Prop()
  summary: string;

  @Prop()
  exampleSpecs: string;

  @Prop()
  additionalApiDocs: string;

  @Prop()
  workshopDocuments: string[];

  @Prop()
  workshopDocumentsLastUpdated: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
