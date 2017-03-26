import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { TechsComponent }  from './techs.component';
import { TechDetailComponent } from './tech-detail.component';
import { TechService } from './tech.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataSerice } from './in-memory-data.service';
import { TechSearchComponent } from './tech-search.component';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataSerice),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TechService
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TechsComponent,
    TechSearchComponent,
    TechDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
