import { Module } from '@nestjs/common';
import { WorkshopController } from './workshop.controller';
import { WorkshopService } from './workshop.service';

@Module({
  controllers: [WorkshopController],
  providers: [WorkshopService]
})
export class WorkshopModule {}
