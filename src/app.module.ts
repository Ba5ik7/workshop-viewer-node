import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationModule } from './modules/navigation/navigation.module';
import { WorkshopModule } from './modules/workshop/workshop.module';

@Module({
  imports: [NavigationModule, WorkshopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
