// export interface Item {
//   /** Id of the doc item. Used in the URL for linking to the doc. */
//   id: string;
//   /** Display name of the doc item. */
//   name: string;
//   /** Short summary of the doc item. */
//   summary?: string;
//   /** Package which contains the doc item. */
//   packageName?: string;
//   /** Specifications for which examples to be load. */
//   exampleSpecs?: ExampleSpecs;
//   /** List of examples. */
//   examples?: string[];
//   /** Optional id of the API document file. */
//   apiDocId?: string;
//   /** Optional path to the overview file of this doc item. */
//   overviewPath?: string;
//   /** List of additional API docs. */
//   additionalApiDocs?: AdditionalApiDoc[];
// }

// export interface AdditionalApiDoc {
//   name: string;
//   path: string;
// }

// export interface ExampleSpecs {
//   prefix: string;
//   exclude?: string[];
// }


export interface Section {
  name: string;
  summary: string;
  menuSvgPath?: string;
  headerSvgPath?: string;
}

const ANGULAR: string = 'angular';
const NESTJS: string = 'nestjs';
const RXJS: string = 'rxjs';
export const SECTIONS: { [key: string]: Section } = {
  [ANGULAR]: {
    name: 'Angular',
    summary: 'Angular Material offers a wide variety of UI components based on the',
    menuSvgPath: '/assets/img/angular-white-transparent.svg'
  },
  [NESTJS]: {
    name: 'Nest JS',
    summary: 'The Component Dev Kit (CDK) is a set of behavior primitives for building UI' ,
    menuSvgPath: '/assets/img/nestjs-white.svg'
  },
  [RXJS]: {
    name: 'RxJS',
    summary: 'The Component Dev Kit (CDK) is a set of behavior primitives for building UI',
    menuSvgPath: '/assets/img/rxjs-white.svg'
  }
};