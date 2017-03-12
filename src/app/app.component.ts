import { Component } from '@angular/core';

export class Tech {
  id: number;
  name: string;
}

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
