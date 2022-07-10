import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ICategory } from './interfaces/category.interface';
import { ISection } from './interfaces/section.interface';
import { NavigationService } from './navigation.service';

@Controller('navigation')
export class NavigationController {
  constructor(private navigationService: NavigationService){}

  @Get('sections')
  sections(): Promise<{ [key: string]: ISection }> { 
    return this.navigationService.findAllSections();
  }

  @Get('categories')
  categories(
    @Query('section') section: string
  ): Promise<ICategory[]> {
    return this.navigationService.findAllCategoriesInSection(section);
  }

  @Post('category/create-category')
  async createCategory(
    @Body() category: ICategory
  ): Promise<ICategory> {
    return await this.navigationService.createCategory(category);
  }

  @Post('category/edit-category-name-and-summary')
  async editCategoryNameAndSummary(
    @Body() category: ICategory
  ): Promise<ICategory> {
    return await this.navigationService.editCategoryNameAndSummary(category);
  }
}
