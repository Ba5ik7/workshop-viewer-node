import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  @Prop()
  id: string;

  @Prop({ required: true })
  sectionId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  summary: string;

  @Prop()
  packageName: string;

  @Prop()
  exampleSpecs: string;

  @Prop()
  examples: string[];

  @Prop()
  apiDocId: string;

  @Prop()
  overviewPath: string;

  @Prop()
  additionalApiDocs: string;

  @Prop()
  workshopDocuments: string[];

  @Prop()
  workshopDocumentsLastUpdated: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
