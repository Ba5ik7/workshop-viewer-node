import { Controller, Get, Param } from '@nestjs/common';
// import { WorkshopDocument } from './interfaces/workshop-document.interface';
import { WorkshopDocumentT } from './schemas/workshop-document.schema';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {

  constructor(private workshopService: WorkshopService){}

  // @Get('example-document/:categoryId')
  // exampleDocument(@Param('categoryId') categoryId): WorkshopDocument {
  //   return this.workshopService.getExampleDocument(categoryId);
  // }

  @Get('workshop-document/:objectId')
  exampleDocument(@Param('objectId') objectId): Promise<WorkshopDocumentT[]> {
    // return this.workshopService.getWorkshopDocument(objectId);
    return this.workshopService.findAll();
  }
}
