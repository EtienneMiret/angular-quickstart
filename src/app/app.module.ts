import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TechsComponent }  from './techs.component';
import { TechDetailComponent } from './tech-detail.component';
import { TechService } from './tech.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  providers: [
    TechService
  ],
  declarations: [
    AppComponent,
    TechsComponent,
    TechDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
