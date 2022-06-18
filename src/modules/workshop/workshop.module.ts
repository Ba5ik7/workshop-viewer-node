import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkshopDocument, WorkshopDocumentSchema } from './schemas/workshop-document';
import { WorkshopController } from './workshop.controller';
import { WorkshopService } from './workshop.service';

@Module({
  imports: [MongooseModule.forFeature([
      { name: WorkshopDocument.name, schema: WorkshopDocumentSchema }
    ])
  ],
  controllers: [WorkshopController],
  providers: [WorkshopService]
})
export class WorkshopModule {}
