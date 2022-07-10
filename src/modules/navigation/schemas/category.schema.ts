import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  id: string;

  @Prop()
  section_id: string;
  // {
  //   type: mongoose.SchemaType.ObjectId,
  //   ref: 'Section'
  // };

  @Prop()
  name: string;

  @Prop()
  summary: string;

  @Prop()
  packageName: string;

  @Prop()
  exampleSpecs: string;

  @Prop()
  examples?: string[];

  @Prop()
  apiDocId?: string;

  @Prop()
  overviewPath?: string;

  @Prop()
  additionalApiDocs: string;

  @Prop()
  workshopDocuments: string[];

  @Prop()
  workshopDocumentsLastUpdated: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
