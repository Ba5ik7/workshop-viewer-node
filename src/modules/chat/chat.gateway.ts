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

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, data: { user: string; room: string }) {
    this.chatService.joinRoom(data.room, data.user);
    client.join(data.room);
    client.to(data.room).emit('userJoined', data.user);
    return this.chatService.getChatRoom(data.room);
  }
}
