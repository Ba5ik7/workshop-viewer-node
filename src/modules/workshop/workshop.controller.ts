import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Auth } from '../../decorators/auth.decorator';
import { AuthType } from '../../enums/auth-type.enum';
import { IWorkshopDocument } from '../../interfaces/workshop.interface';
import { WorkshopService } from './workshop.service';

@Controller('workshop')
export class WorkshopController {
  constructor(private workshopService: WorkshopService) {}

  @Auth(AuthType.None)
  @Get('workshops')
  workshops(): Promise<IWorkshopDocument[]> {
    return this.workshopService.findAll();
  }

  @Auth(AuthType.None)
  @Get(':objectId')
  workshop(@Param('objectId') objectId): Promise<IWorkshopDocument> {
    return this.workshopService.getWorkshop(objectId);
  }

  @Auth(AuthType.None)
  @Get('html/:objectId')
  workshopHtml(@Param('objectId') objectId): Promise<IWorkshopDocument> {
    return this.workshopService.getWorkshopHtml(objectId);
  }

  @Post('update-workshop-html')
  async updateWorkshopHtml(
    @Body() { html, _id }: { html: string; _id: string },
  ): Promise<IWorkshopDocument> {
    return await this.workshopService.updateWorkshopHtml(_id, html);
  }
}
