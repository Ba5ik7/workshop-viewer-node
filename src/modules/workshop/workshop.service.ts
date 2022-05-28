import { Injectable } from '@nestjs/common';
import { EXAMPLE_DOCUMENT, WorkshopDocument } from './interfaces/workshop-document.interface';

@Injectable()
export class WorkshopService {

  getExampleDocument(): string {
    return EXAMPLE_DOCUMENT
  }
}
