import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppService } from './app.service';

import { HttpModule } from '@angular/http'

import { EmptyDataComponent } from './directive/empty-data.component';
import { DefaulfImage } from './pipe/image.pipe'

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyDataComponent,
    DetailComponent,
    ListComponent,
    DefaulfImage
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
