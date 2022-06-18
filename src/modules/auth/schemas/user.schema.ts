import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  email: string;

  @Prop()
  password: string;  
}

export const UserSchema = SchemaFactory.createForClass(User);
