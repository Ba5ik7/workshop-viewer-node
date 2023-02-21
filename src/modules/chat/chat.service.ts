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
export class ChatService {
  users: Record<string, string> = {};
  chatRooms: Record<string, ChatRoom> = {
    General: { users: [], messages: [] },
    Angular: { users: [], messages: [] },
    NestJS: { users: [], messages: [] },
    RxJS: { users: [], messages: [] },
  };

  identify(user: string, clientId: string) {
    this.users[user] = clientId;
  }

  getChatRoom(room: string) {
    return this.chatRooms[room];
  }

  getChatRooms() {
    const keys = Object.keys(this.chatRooms);
    return keys;
  }
}
