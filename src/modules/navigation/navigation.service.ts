import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IWorkshopDocument } from '../workshop/interfaces/workshop.interface';
import { WorkshopService } from '../workshop/workshop.service';
import { ICategory } from './interfaces/category.interface';
import { ISection } from './interfaces/section.interface';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Section, SectionDocument } from './schemas/section.schema';

@Injectable()
export class NavigationService {

  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    private workshopService: WorkshopService
    ) {}

  async findAllSections(): Promise<{ [key: string]: ISection }> {
    const sections = await this.sectionModel.find().exec();
    const sectionFormatToObject = sections
    .reduce((acc, cur) => ({ ...acc, [cur._id]: cur }), {});
    return Promise.resolve(sectionFormatToObject);
  }

  async findAllCategoriesInSection(section: string): Promise<Category[]> {
    return this.categoryModel.where('sectionId').equals(section);
  }

  async createCategory(category: ICategory): Promise<ICategory> {
    const newCategory: ICategory = await this.categoryModel.create(category);
    const workshop: IWorkshopDocument = await this.workshopService.createWorkshop({ id: newCategory.id });
    const updatedCategory = await this.categoryModel.findByIdAndUpdate<ICategory>(
      newCategory._id,
      {
        workshopDocuments: [workshop._id],
        workshopDocumentsLastUpdated: Date.now()
      },
      { returnDocument: 'after' }
    );
    return updatedCategory
  }

  async editCategoryNameAndSummary(category: ICategory): Promise<ICategory> {
    const updatedCategory = await this.categoryModel.findByIdAndUpdate<ICategory>(
      category._id,
      {
        name: category.name,
        summary: category.summary
      },
      { returnDocument: 'after' }
    );
    return updatedCategory
  }
}
