import { Types } from 'mongoose';

export interface IAdditionalApiDoc {
  name?: string;
  path?: string;
}

export interface IExampleSpecs {
  prefix?: string;
  exclude?: string[];
}

export interface ICategory {
  _id?: Types.ObjectId;
  /** What section this category belongs to */
  section_id?: string;
  /** Id of the doc item. Used in the URL for linking to the doc. */
  id?: string;
  /** Display name of the doc item. */
  name?: string;
  /** Short summary of the doc item. */
  summary?: string;
  /** Package which contains the doc item. */
  packageName?: string;
  /** Specifications for which examples to be load. */
  exampleSpecs?: string;
  /** List of examples. */
  examples?: string[];
  /** Optional id of the API document file. */
  apiDocId?: string;
  /** Optional path to the overview file of this doc item. */
  overviewPath?: string;
  /** List of additional API docs. */
  additionalApiDocs?: string;
  /** List of documents asscocated with the category */
  workshopDocuments?: string[];
  /** Last time the workshopDocuments was updated */
  workshopDocumentsLastUpdated?: Date;
}
