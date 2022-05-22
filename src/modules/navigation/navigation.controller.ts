import { Controller, Get } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { Section } from './interfaces/section.interface';
import { Category } from './interfaces/category.interface';

@Controller('navigation')
export class NavigationController {
  constructor(private navigationService: NavigationService){}

  @Get('sections')
  sections(): { [key: string]: Section } {
    return this.navigationService.getAllSections();
  }
  
  @Get('categories')
  categories(): { [key: string]: Category[] } {
    return this.navigationService.getAllCategories();
  }
}