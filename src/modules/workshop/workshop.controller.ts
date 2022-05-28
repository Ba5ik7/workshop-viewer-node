import { Controller, Get } from '@nestjs/common';
import { WorkshopDocument } from './interfaces/workshop-document.interface';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {

  constructor(private workshopService: WorkshopService){}

  @Get('example-document')
  exampleDocument(): WorkshopDocument {

    return this.workshopService.getExampleDocument();
  }
}
