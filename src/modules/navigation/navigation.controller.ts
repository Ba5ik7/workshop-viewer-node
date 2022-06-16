import { Controller, Get } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { Category } from './schemas/category.schema';
// import { Section } from './interfaces/section.interface';
// import { Category } from './interfaces/category.interface';
import { Section } from './schemas/section.schema';

@Controller('navigation')
export class NavigationController {
  constructor(private navigationService: NavigationService){}

  // @Get('sections')
  // sections(): { [key: string]: Section } {
  //   return this.navigationService.getAllSections();
  // }
  
  // @Get('categories')
  // categories(): { [key: string]: Category[] } {
  //   return this.navigationService.getAllCategories();
  // }

  @Get('sections')
  async sections(): Promise<Section[]> {
    return this.navigationService.findAllSections();
  }

  @Get('categories')
  async categories(): Promise<Category[]> {
    return this.navigationService.findAllCategories();
  }
}