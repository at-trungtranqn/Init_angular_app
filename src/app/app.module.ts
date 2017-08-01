import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './lists/list.component';
import { EmptyDataDirective } from './directives/empty-data.directive';


@NgModule({
  declarations: [
    AppComponent, 
    ListComponent,
    EmptyDataDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
