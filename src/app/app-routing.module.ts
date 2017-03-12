import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { TechsComponent } from './techs.component';
import { TechDetailComponent } from './tech-detail.component';

const routes: Route[] = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
