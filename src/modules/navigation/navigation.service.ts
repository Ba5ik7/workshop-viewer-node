import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Section, SectionDocument } from './schemas/section.schema';
// import { Category, CATEGORIES } from './interfaces/category.interface';
// import { Section, SECTIONS } from './interfaces/section.interface';

@Injectable()
export class NavigationService {

  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) {}

  // getAllSections(): { [key: string]: Section } { 
  //   return SECTIONS;
  // }

  // getAllCategories(): { [key: string]: Category[] } { 
  //   return CATEGORIES;
  // }

  async findAllSections(): Promise<Section[]> {
    return this.sectionModel.find().exec();
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }
}