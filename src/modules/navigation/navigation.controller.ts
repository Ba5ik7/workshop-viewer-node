import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IWorkshopDocument } from '../workshop/interfaces/workshop.interface';
import {
  CategoryWorkshopDocument,
  ICategory,
} from './interfaces/category.interface';
import { ISection } from './interfaces/section.interface';
import { NavigationService } from './navigation.service';

@Controller('navigation')
export class NavigationController {
  constructor(private navigationService: NavigationService) {}

  @Get('sections')
  sections(): Promise<{ [key: string]: ISection }> {
    return this.navigationService.findAllSections();
  }

  @Get('categories')
  categories(@Query('section') section: string): Promise<ICategory[]> {
    return this.navigationService.findAllCategoriesInSection(section);
  }

  @UseGuards(JwtAuthGuard)
  @Post('category/create-category')
  async createCategory(@Body() category: ICategory): Promise<ICategory> {
    return await this.navigationService.createCategory(category);
  }

  @UseGuards(JwtAuthGuard)
  @Post('category/edit-category-name-and-summary')
  async editCategoryNameAndSummary(
    @Body() category: ICategory,
  ): Promise<ICategory> {
    return await this.navigationService.editCategoryNameAndSummary(category);
  }

  @UseGuards(JwtAuthGuard)
  @Post('category/delete-category-and-workshops')
  async deleteCategoryAndWorkshops(
    @Body() body: { _id: string },
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return await this.navigationService.deleteCategoryAndWorkshops(body._id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('category/sort-categories')
  async sortCategories(@Body() categories: ICategory[]): Promise<any> {
    return await this.navigationService.sortCategories(categories);
  }

  @UseGuards(JwtAuthGuard)
  @Post('page/create-page')
  async createPage(
    @Body() page: IWorkshopDocument,
  ): Promise<IWorkshopDocument> {
    return await this.navigationService.createPage(page);
  }

  @UseGuards(JwtAuthGuard)
  @Post('page/delete-page-and-update-category')
  async deletePageAndUpdateCategory(
    @Body() page: IWorkshopDocument,
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return await this.navigationService.deletePageAndUpdateCategory(
      page._id,
      page.category._id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('page/edit-page-name-update-category')
  async editPageNameUpdateCategory(
    @Body() page: IWorkshopDocument,
  ): Promise<ICategory> {
    return await this.navigationService.editPageNameUpdateCategory(page);
  }

  @UseGuards(JwtAuthGuard)
  @Post('page/sort-pages')
  async sortPages(
    @Body() pages: CategoryWorkshopDocument[],
    @Query('categoryId') categoryId: string,
  ): Promise<ICategory> {
    return await this.navigationService.sortPages(pages, categoryId);
  }
}
