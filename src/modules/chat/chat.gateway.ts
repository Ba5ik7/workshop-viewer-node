import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({ path: '/chat', namespace: 'chat', cors: true })
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('message')
  handleMessage(client: Socket, user: string): string {
    console.log({
      client,
      user,
    });

    return 'Hello world!';
  }
}
