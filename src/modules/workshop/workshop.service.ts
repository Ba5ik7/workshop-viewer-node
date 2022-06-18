import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { EXAMPLE_DOCUMENTS, WorkshopDocument } from './interfaces/workshop-document.interface';
import { WorkshopDocument, WorkshopDocumentT } from './schemas/workshop-document.schema';

@Injectable()
export class WorkshopService {

  constructor(
    @InjectModel(WorkshopDocument.name) private workshopDocumentModel: Model<WorkshopDocumentT>
  ) {}

  // getExampleDocument(categoryId: string): WorkshopDocument {
  //   return EXAMPLE_DOCUMENTS.find((category) => category.id === categoryId);
  // }

  getWorkshopDocument(objectId) {
    return this.workshopDocumentModel.where('_id').equals('62aa78b1e0c43119ba4c2acc');
  }

  async findAll(): Promise<WorkshopDocumentT[]> {
    return this.workshopDocumentModel.find().exec();
  }
}
