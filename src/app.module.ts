import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import * as mongodbPw from '../mongodbPw.json';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationModule } from './modules/navigation/navigation.module';
import { WorkshopModule } from './modules/workshop/workshop.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${mongodbPw.user}:${mongodbPw.pw}@${mongodbPw.ip}:${mongodbPw.port}`),
    NavigationModule,
    WorkshopModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
