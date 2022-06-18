export interface IAdditionalApiDoc {
  name: string;
  path: string;
}

export interface IExampleSpecs {
  prefix: string;
  exclude?: string[];
}

export interface ICategory {
  /** Id of the doc item. Used in the URL for linking to the doc. */
  id: string;
  /** Display name of the doc item. */
  name: string;
  /** Short summary of the doc item. */
  summary?: string;
  /** Package which contains the doc item. */
  packageName?: string;
  /** Specifications for which examples to be load. */
  exampleSpecs: IExampleSpecs;
  /** List of examples. */
  examples?: string[];
  /** Optional id of the API document file. */
  apiDocId?: string;
  /** Optional path to the overview file of this doc item. */
  overviewPath?: string;
  /** List of additional API docs. */
  additionalApiDocs?: IAdditionalApiDoc[];
}

// const ANGULAR: string = 'angular';
// const NESTJS: string = 'nestjs';
// const RXJS: string = 'rxjs';
// export const  CATEGORIES: { [key: string]: Category[] } = {
//   [ANGULAR]: [
//     {
//       id: 'example',
//       name: 'Example',
//       summary: 'This is a example',
//       exampleSpecs: {
//         prefix: 'example-',
//       },
//       additionalApiDocs: [{name: '', path: ''}],
//     },
//     {
//       id: 'route-reuse-strategy',
//       name: 'Route Reuse Strategy',
//       summary: 'Angular, out of the box, has a powerful router that simply displays new components when accessing different URLs within the application.',
//       exampleSpecs: {
//         prefix: 'routereusestrategy-',
//       },
//       additionalApiDocs: [{name: '', path: ''}],
//     }
//   ],
//   [NESTJS]: [
//     {
//       id: 'button',
//       name: 'Button',
//       summary: 'An interactive button with a range of presentation options.',
//       exampleSpecs: {
//         prefix: 'button-',
//         exclude: ['button-toggle-']
//       },
//       additionalApiDocs: [{name: 'Testing', path: 'material-button-testing.html'}],
//     },
//     {
//       id: 'button-toggle',
//       name: 'Button toggle',
//       summary: 'A groupable on/off toggle for enabling and disabling options.',
//       exampleSpecs: {
//         prefix: 'button-toggle-',
//       },
//       additionalApiDocs: [{name: 'Testing', path: 'material-button-toggle-testing.html'}],
//     },
//     {
//       id: 'card',
//       name: 'Card',
//       summary: 'A styled container for pieces of itemized content.',
//       exampleSpecs: {
//         prefix: 'card-',
//       },
//       additionalApiDocs: [{name: 'Testing', path: 'material-card-testing.html'}],
//     }
//   ],
//   [RXJS]: [
//     {
//       id: 'checkbox',
//       name: 'Checkbox',
//       summary: 'Captures boolean input with an optional indeterminate mode.',
//       exampleSpecs: {
//         prefix: 'checkbox-',
//       },
//       additionalApiDocs: [{name: 'Testing', path: 'material-checkbox-testing.html'}],
//     },
//     {
//       id: 'chips',
//       name: 'Chips',
//       summary: 'Presents a list of items as a set of small, tactile entities.',
//       exampleSpecs: {
//         prefix: 'chips-',
//       },
//       additionalApiDocs: [{name: 'Testing', path: 'material-chips-testing.html'}],
//     },
//     {
//       id: 'core',
//       name: 'Core',
//       summary: 'Reusable parts used by other components in the library.',
//       exampleSpecs: {
//         prefix: 'core-',
//       },
//       additionalApiDocs: [{name: 'Testing', path: 'material-core-testing.html'}],
//     },
//   ]
// };