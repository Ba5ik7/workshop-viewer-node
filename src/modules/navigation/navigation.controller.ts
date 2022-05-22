import { Controller, Get } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { Section } from './section.interface';

@Controller('navigation')
export class NavigationController {
  constructor(private navigationService: NavigationService){}

  @Get('sections')
  sections(): { [key: string]: Section } {
    return this.navigationService.getAllSections();
  }
  
}