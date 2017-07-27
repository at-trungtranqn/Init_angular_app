 

# Angular Component

## 1. Briefly explain Event Binding in Angular?
	Event binding allows us to work in reverse from property binding. We can send information from the view, to the component class. Such information usually involves a click, hover or typing. Below is an example of event binding: 
```
template: `

<h1>My First Angular App</h1>

<img [src]="imageUrl" (click)='myMethod()'>
<img [src]="imageUrl" on-click='myMethod()'>

`
imageUrl = 'https://angular.io/resources/images/logos/angular2/angular.png';

myMethod() {
   console.log('Hey!');
}

```		

## 2. Briefly explain Data Binding in Angular?

Data binding  There are a couple of ways to bind data in Angular: interpolation, one way binding (unidirectional), two-way binding and event binding 

## 3. What are Event Emitters and how it works in Angular?

- Event emitter as it sounds is just something that triggers an event to which anyone can listen. Different libraries offer different implementations and for different purposes, but the basic idea is to provide a framework for issuing events and subscribing to them.
- Working with EventEmitter: EventEmitter is a class in angular framework. It has emit() method that emits custom events. We can use EventEmitter in custom event binding. To achieve it first we need to import it in our component file as given below.
```
import {Component, EventEmitter, Input, Output} from '@angular/core'; 
```
And then initialize it using @Output decorator as follows.

```
@Output() updateEmployee = new EventEmitter<Employee>();  
```
Here Employee is our TypeScript class. @Output() defines an output variable. updateEmployee will be a custom event name. Using emit() method of EventEmitter class we emits Employee object to parent component in custom event binding as follows.

```
this.updateEmployee.emit(this.employee);  
```
The object emitted by emit() method can be accessed using event object $event
## 4. Explain the life cycle hooks of Angular application?

A component has a lifecycle managed by Angular.

Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.

A directive has the same set of lifecycle hooks, minus the hooks that are specific to component content and views.
Angular calls the lifecycle hook methods in the following sequence at specific moments:

| Hook                      | Purpose and Timing                       |
| ------------------------- | ---------------------------------------- |
| `ngOnChanges()`           | Respond when Angular (re)sets data-bound input properties. The method receives a `SimpleChanges` object of current and previous property values |
| `ngOnInit()`              | Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.Called *once*, after the *first* `ngOnChanges()`. |
| `ngDoCheck()`             | Detect and act upon changes that Angular can't or won't detect on its own.Called during every change detection run, immediately after `ngOnChanges()` and `ngOnInit()`. |
| `ngAfterContentInit()`    | Respond after Angular projects external content into the component's view.Called *once* after the first `ngDoCheck()`.*A component-only hook*. |
| `ngAfterContentChecked()` | Respond after Angular checks the content projected into the component.Called after the `ngAfterContentInit()` and every subsequent `ngDoCheck()`.*A component-only hook*. |
| `ngAfterViewInit()`       | Respond after Angular initializes the component's views and child views.Called *once* after the first `ngAfterContentChecked()`.*A component-only hook*. |
| `ngAfterViewChecked()`    | Respond after Angular checks the component's views and child views.Called after the `ngAfterViewInit` and every subsequent `ngAfterContentChecked()`.*A component-only hook*. |
| `ngOnDestroy`             | Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.Called *just before* Angular destroys the directive/component. |

## 5. Explain the `ContentChild` `ContentChildren` and write an example?
- They work in similar ways to the view child counterparts, @ContentChild returns one child and @ContentChildren returns a QueryList.
- ContentChildren includes only elements that exists within the ng-content tag.
Returns the specified elements or directives from the content DOM as QueryList

```
@Component({
  selector: 'tab',
  template: `
    <p>{{title}}</p>
  `,
})
export class TabComponent {
  @Input() title;
}

@Component({
  selector: 'tabs',
  template: `
    <ng-content></ng-content>
  `,
})
export class TabsComponent {
 @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
 
 ngAfterContentInit() {
   this.tabs.forEach(tabInstance => console.log(tabInstance))
 }
}

@Component({
  selector: 'my-app',
  template: `
    <tabs>
     <tab title="One"></tab>
     <tab title="Two"></tab>
    </tabs>
  `,
})
export class App {}
```

- **Extra**
## 6. Briefly explain ElementRef in Angular? Write an example.
- Represents a location in a View that has an injection, change-detection and render context associated with it.
An ElementRef is created for each element in the Template that contains a Directive, Component or data-binding.
An ElementRef is backed by a render-specific element. In the browser, this is usually a DOM element.
Provides access to the underlying native element (DOM element).

```
import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>My App</h1>
    <pre>
      <code>{{ node }}</code>
    </pre>
  `
})
export class AppComponent implements AfterContentInit {
  node: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const el = this.elementRef.nativeElement.cloneNode(true);

    tmp.appendChild(el);
    this.node = tmp.innerHTML;
  }

}
```

