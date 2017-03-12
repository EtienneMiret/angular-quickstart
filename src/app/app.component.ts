import { Component } from '@angular/core';
import { Tech } from './tech';
import { techs } from './tech-list';

@Component({
  selector: 'my-app',
  styleUrls: ['app/style.css'],
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  title = 'Tour of technologies';
  techs = techs;
  selected: Tech = null;
}
