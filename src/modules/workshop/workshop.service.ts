import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IWorkshopDocument } from './interfaces/workshop.interface';
import { Workshop, WorkshopDocument } from './schemas/workshop.schema';
import { Types } from 'mongoose';

@Injectable()
export class WorkshopService {

  constructor(
    @InjectModel(Workshop.name) private workshopModel: Model<WorkshopDocument>
  ) {}

  async getWorkshop(objectId): Promise<IWorkshopDocument> {
    return this.workshopModel.findById(new Types.ObjectId(objectId)).exec();
  }

  async findAll(): Promise<WorkshopDocument[]> {
    return this.workshopModel.find().exec();
  }
}
