import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkshopDocument = Workshop & Document;

@Schema()
export class Workshop {

  @Prop({ required: true })
  id: string;

  @Prop({
    default: () => Date.now()
  })
  lastUpdated: Date;

  @Prop({
    default: () => '<h1>New Workshop</h1>'
  })
  html: string;  
}

export const WorkshopSchema = SchemaFactory.createForClass(Workshop);
