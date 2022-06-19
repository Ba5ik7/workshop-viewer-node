import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: value => value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) 
    }
  })
  email: string;

  @Prop({ required: true, minlength: 5 })
  password: string;

  @Prop({
    immutable: true,
    default: () => Date.now()
  })
  createdAt: Date

  
  @Prop({
    default: () => Date.now()
  })
  updatedAt: Date

}

export const UserSchema = SchemaFactory.createForClass(User);
