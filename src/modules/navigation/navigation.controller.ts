import { Controller, Get, Query } from '@nestjs/common';
import { ISection } from './interfaces/section.interface';
import { NavigationService } from './navigation.service';
import { Category } from './schemas/category.schema';

@Controller('navigation')
export class NavigationController {
  constructor(private navigationService: NavigationService){}

  @Get('sections')
  async sections(): Promise<{ [key: string]: ISection }> { 
    return this.navigationService.findAllSections();
  }

  @Get('categories')
  async categories(
    @Query('section') section: string
  ): Promise<Category[]> {
    return this.navigationService.findAllCategoriesInSection(section);
  }
}