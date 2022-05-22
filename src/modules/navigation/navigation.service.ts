import { Injectable } from '@nestjs/common';
import { Category, CATEGORIES } from './interfaces/category.interface';
import { Section, SECTIONS } from './interfaces/section.interface';

@Injectable()
export class NavigationService {

  getAllSections(): { [key: string]: Section } { 
    return SECTIONS;
  }

  getAllCategories(): { [key: string]: Category[] } { 
    return CATEGORIES;
  }
}