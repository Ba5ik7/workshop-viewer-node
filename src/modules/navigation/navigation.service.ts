import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISection } from './interfaces/section.interface';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Section, SectionDocument } from './schemas/section.schema';

@Injectable()
export class NavigationService {

  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) {}

  async findAllSections(): Promise<{ [key: string]: ISection }> {
    const sections = await this.sectionModel.find().exec();
    const sectionFormatToObject = sections
    .reduce((acc, cur) => ({ ...acc, [cur._id]: cur }), {});
    return Promise.resolve(sectionFormatToObject);
  }

  async findAllCategoriesInSection(section: string): Promise<Category[]> {
    return this.categoryModel.where('section_id').equals(section);
  }
}
