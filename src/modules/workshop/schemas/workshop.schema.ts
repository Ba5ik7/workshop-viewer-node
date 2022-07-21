import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkshopDocument = Workshop & Document;

@Schema()
export class Workshop {

  @Prop({ required: true })
  id: string;

  @Prop({
    default: () => 'Page'
  })
  name: string;

  @Prop({
    default: () => 0
  })
  sortId: number;

  @Prop({
    default: () => Date.now()
  })
  lastUpdated: Date;

  @Prop({
    default: () => JSON.stringify(defaultWorkshopHtml)
  })
  html: string;  
}

export const WorkshopSchema = SchemaFactory.createForClass(Workshop);


const defaultWorkshopHtml = {
  time: 1658348554122,
  blocks: [
    {
      id: 'nFdjn4e1md',
      type: 'header',
      data: {
        text: 'Create a Magical Workshop&nbsp;🪄',
        level: 1
      }
    }
  ],
  version: '2.25.0'
}