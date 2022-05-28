import { Injectable } from '@nestjs/common';
import { EXAMPLE_DOCUMENT, WorkshopDocument } from './interfaces/workshop-document.interface';

@Injectable()
export class WorkshopService {

  getExampleDocument(): WorkshopDocument {
    return EXAMPLE_DOCUMENT
  }
}
