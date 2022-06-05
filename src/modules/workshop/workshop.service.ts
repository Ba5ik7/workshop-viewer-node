import { Injectable } from '@nestjs/common';
import { EXAMPLE_DOCUMENTS, WorkshopDocument } from './interfaces/workshop-document.interface';

@Injectable()
export class WorkshopService {

  getExampleDocument(categoryId: string): WorkshopDocument {
    return EXAMPLE_DOCUMENTS.find((category) => category.id === categoryId);
  }
}
