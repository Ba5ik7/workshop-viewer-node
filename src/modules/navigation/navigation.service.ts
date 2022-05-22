import { Injectable } from '@nestjs/common';
import { Section, SECTIONS } from './interfaces/section.interface';

@Injectable()
export class NavigationService {

  getAllSections(): { [key: string]: Section } { 
    return SECTIONS;
  }
}