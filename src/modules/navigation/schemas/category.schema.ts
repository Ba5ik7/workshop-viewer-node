import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  @Prop()
  id: string;

  @Prop({ required: true })
  sectionId: string;

  @Prop({
    default: () => 1
  })
  sortId: number;

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

CategorySchema.pre('save', async function() {
  if(this.isNew) {
    this.id = spinalCase(this.name);
  }
});

function spinalCase(str) {
  return str.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g, function ($0, $1) {
              return $1 ? "-" : "";
         }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase();
}