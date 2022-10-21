import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat', cors: true })
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: Socket, user: string): string {
    console.log({
      client,
      user,
    });

    return 'Hello world!';
  }
}
