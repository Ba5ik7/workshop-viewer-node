import { Injectable } from '@nestjs/common';

export interface Message {
  user: string;
  content: string;
}

export interface ChatRoom {
  users: string[];
  messages: Message[];
}

@Injectable()
export class ChatService {}
