import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TechsComponent }  from './techs.component';
import { TechDetailComponent } from './tech-detail.component';
import { TechService } from './tech.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    HttpModule,
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
    TechDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
