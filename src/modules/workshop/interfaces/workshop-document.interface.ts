export interface WorkshopDocument {

  id: string,
  lastUpdated: number,
  html: string
}

export const EXAMPLE_DOCUMENTS: WorkshopDocument[] = [
  {
    id: 'example',
    lastUpdated: 1653716532046,
    html: `
    <div class="page">
      <section class="container">
        <h1>Testing portal lazy loaded components</h1>
        <p>Should see something under me</p>
        <div workshop-live-example="solution-one" "file="workshop-live-example.html"></div>
      </div>
    </div>`
  },
  {
    id: 'route-reuse-strategy',
    lastUpdated: 1653716532046,
    html: `
    <div class="page">
      <section class="container">
        <div class="mat-card">
          <h1>Overview</h1>
          <p>Angular, out of the box, has a powerful router that simply displays new components when accessing different URLs within the application. However, there are situations that the default functionality of the router can fall short of meeting business requirements. Like cracking an egg, there are numerous ways to work around some of this short coming. In this workshop we are going to look at the RouteReuseStrategy and how to use it to manipulate the default functionality of the Angular router. We will cover two scenarios in this workshop that Angular developers commonly use.</p>
        </div>
        <div class="mat-card">
          <h1>RouteReuseStrategy</h1>
          <p>There is an abstract class RouteReuseStrategy within Angular codebase that dictates how and when components are created, saved, and destroyed during routing lifecycle. Angular by default uses the RouteReuseStrategy.</p>
          <p>Let's look at the default methods of the class below:</p>
          <highlight-card [code]="code"></highlight-card>
          <div code-highlighter code="abstract class BaseRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void
  shouldAttach(route: ActivatedRouteSnapshot): boolean
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean
}" ></div>
          <p>Directly from Angular documents:</p>
          <p><i>This base route reuse strategy only reuses routes when the matched router configs are identical. This prevents components from being destroyed and recreated when just the fragment or query parameters change (that is, the existing component is reused).</i></p>
          <p>Basically, component lifecycles will NOT be triggered if the component is being reused on query routes. We will talk about these methods and how we can use them to enhance the Angular router to meet our edge cases.</p>
        </div>
        <div class="mat-card">
          <h1>Custom Implementation</h1>
          <p>To add a custom implementation of the RouteReuseStrategy, you need to complete this two-step process:</p>
          <p>1. Create a class that extends the RouteReuseStrategy and then implement the required methods in order to extend the abstract class:</p>
          <div code-highlighter code="export class CustomReuseStrategy extends RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void { }
  
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }  
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}"></div>
          <p><i>Note: The methods' logic we added is the same as the default Angular logic.</i></p>
          <p>2. Create a provider to inject your custom class in your application's main module:</p>
          <div code-highlighter code="@NgModule({
  ...
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
]})"></div>
          <p><i>Important to note that when adding a route strategy as a provider, you must ONLY do so in the top-level component's module.</i></p>
        </div>
        <div class="mat-card">
          <h1>Example Situation</h1>
          <p>A common situation in web applications is a parent-detail relationship. Where some “parent” page (e.g. search results) is displaying a list of items which the user can click to view the details. Using this pattern, we are going to set a few limitations on how we want the application to perform:</p>
          <ul>
            <li>The parent page should have some state that should be preserved between viewing details (such as sorting, filtering, etc.)</li>
            <li>The detail is viewable via a distinct URL containing an ID for the detail record.</li>
            <li>The detail view should load the detail's content and be able to run some initialization logic.</li>
            <li>The components will need to run cleanup code when destroyed such as unsubscribing from observables.</li>
          </ul>
          <p>We will implement two common design patterns used in Angular development. Each will have drawbacks. In those areas, we will use our custom RouteReuseStrategy to fill in those gaps.</p>
        </div>
        <div class="mat-card">
          <h1>Shared Components</h1>
          <p>Both approaches will use the same detail component and will extent a base class for the parent pages. These examples will share as much logic as possible between the scenarios to help focus on the different approaches rather than the component's logic.</p>
          <p><b>Shared Parent Class</b><br>The base abstract class to be used by the parent pages:</p>
          <highlight-card [code]="code4"></highlight-card>
          <p>There are a few things happening in this component to take note of:</p>
          <ol>
            <li>OnInit we are generating a list of random numbers to emulate state.</li>
            <li>OnDestroy we are logging an identifier to emulate a teardown of an observable</li>
          </ol>
          <p><b>Shared Detail Component</b><br>Both approaches will use the same detail component:</p>
          <highlight-card [code]="code5"></highlight-card>
          <p>There are a few things happening in this component to take note of:</p>
          <ol>
            <li>OnInit we get the route parameters from the URL to display in the view - this emulates any data loading for the detail from a back-end service</li>
            <li>Also generates a new random value to display in the view - this represents some view initialization for the detail page</li>
            <li>OnDestroy same as the shared parent class logging an identifier</li>
          </ol>
        </div>
	      <next-page title="Next Section: Parent-Child Design" icon="arrow_forward" click-event="1"></next-page>
      </section>
    </div>`
  }
]
