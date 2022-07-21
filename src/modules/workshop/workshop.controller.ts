import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IWorkshopDocument } from './interfaces/workshop.interface';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {

  constructor(private workshopService: WorkshopService){}

  @Get('workshops')
  workshops(): Promise<IWorkshopDocument[]> {
    return this.workshopService.findAll();
  }

  @Get(':objectId')
  workshop(@Param('objectId') objectId): Promise<IWorkshopDocument> {
    return this.workshopService.getWorkshop(objectId);
  }

  @Get('html/:objectId')
  workshopHtml(@Param('objectId') objectId): Promise<IWorkshopDocument> {
    return this.workshopService.getWorkshopHtml(objectId);
  }

  @Post('update-workshop-html')
  async updateWorkshopHtml(
    @Body() { html, _id }: { html: string, _id: string }
  ): Promise<IWorkshopDocument> {
    return await this.workshopService.updateWorkshopHtml(_id, html);
  }

}
