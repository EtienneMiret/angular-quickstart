import { Component } from '@angular/core';
import { Tech } from './tech';
import { techs } from './tech-list';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  title = 'Tour of technologies';
  techs = techs;
  tech: Tech = {
    id: 1,
    name: 'Angular'
  }
}
