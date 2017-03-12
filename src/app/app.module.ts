import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TechDetailComponent } from './tech-detail.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  declarations: [
    AppComponent,
    TechDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
