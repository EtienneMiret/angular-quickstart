import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { TechsComponent }  from './techs.component';
import { TechDetailComponent } from './tech-detail.component';
import { TechService } from './tech.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'techs/:id',
        component: TechDetailComponent
      },
      {
        path: 'techs',
        component: TechsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      }
    ])
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
