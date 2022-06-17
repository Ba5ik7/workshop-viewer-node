import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';




import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationModule } from './modules/navigation/navigation.module';
import { WorkshopModule } from './modules/workshop/workshop.module';

import * as mongodbPw from '../mongodbPw.json';
// const mongodbPw =
// {
//   "user": "wesley",
//   "pw": "Kelly!one57`",
//   "ip": "143.198.23.3",
//   "port": "27017"
// };

console.log(`mongodb://${mongodbPw.user}:${mongodbPw.pw}@${mongodbPw.ip}:${mongodbPw.port}/workshop-viewer`);


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${mongodbPw.user}:${mongodbPw.pw}@${mongodbPw.ip}:${mongodbPw.port}/workshop-viewer`),
    NavigationModule,
    WorkshopModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
