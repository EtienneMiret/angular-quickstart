import { Component } from '@angular/core';
import { Tech } from './tech';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  title = 'Tour of technologies';
  tech: Tech = {
    id: 1,
    name: 'Angular'
  }
}
