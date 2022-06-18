import { Controller, Get, Param } from '@nestjs/common';
import { IWorkshopDocument } from './interfaces/workshop.interface';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {

  constructor(private workshopService: WorkshopService){}

  @Get('workshops')
  workshops(): Promise<IWorkshopDocument[]> {
    return this.workshopService.findAll();
  }

  @Get('workshops/:objectId')
  workshop(@Param('objectId') objectId): Promise<IWorkshopDocument> {
    return this.workshopService.getWorkshop(objectId);
  }
}
