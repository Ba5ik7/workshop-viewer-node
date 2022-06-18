import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop()
  _id: string;

  @Prop()
  sectionTitle: string;

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

export const SectionSchema = SchemaFactory.createForClass(Section);