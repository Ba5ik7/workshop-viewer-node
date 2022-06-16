import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavigationController } from './navigation.controller';
import { NavigationService } from './navigation.service';
import { Section, SectionSchema } from './schemas/section.schema'
import { Category, CategorySchema } from './schemas/category.schema'

@Module({
  imports: [MongooseModule.forFeature([
      { name: Section.name, schema: SectionSchema },
      { name: Category.name, schema: CategorySchema }
    ])
  ],
  controllers: [NavigationController],
  providers: [NavigationService]
})
export class NavigationModule {}
