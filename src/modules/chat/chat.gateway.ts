import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({ path: '/chat', namespace: 'chat', cors: true })
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('identify')
  async handleIdentify(client: Socket, user: string) {
    this.chatService.identify(user, client.id);
    return this.chatService.getChatRooms();
  }

  @SubscribeMessage('disconnect')
  async handleDisconnect(client: Socket) {
    const user = this.chatService.disconnect(client.id);
    client.broadcast.emit('userLeft', user);
  }
}
