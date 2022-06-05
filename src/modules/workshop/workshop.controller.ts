import { Controller, Get, Param } from '@nestjs/common';
import { WorkshopDocument } from './interfaces/workshop-document.interface';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {

  constructor(private workshopService: WorkshopService){}

  @Get('example-document/:categoryId')
  exampleDocument(@Param('categoryId') categoryId): WorkshopDocument {
    return this.workshopService.getExampleDocument(categoryId);
  }
}
