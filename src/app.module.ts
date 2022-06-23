import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationModule } from './modules/navigation/navigation.module';
import { WorkshopModule } from './modules/workshop/workshop.module';
import { AuthModule } from './modules/auth/auth.module';
import { CatModule } from './example/cat/cat.module';

import * as mongodbPw from '../mongodbPw.json';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${mongodbPw.user}:${mongodbPw.pw}@${mongodbPw.ip}:${mongodbPw.port}/workshop-viewer`),
    NavigationModule,
    WorkshopModule,
    AuthModule,
    CatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
