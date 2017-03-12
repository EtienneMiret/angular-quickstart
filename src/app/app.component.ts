import { Component, OnInit } from '@angular/core';
import { Tech } from './tech';
import { TechService } from './tech.service';

@Component({
  selector: 'my-app',
  providers: [
    TechService
  ],
  styleUrls: ['app/style.css'],
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Tour of technologies';

  techs: Tech[];

  selected: Tech = null;

  constructor(
    private techService: TechService
  ) {}

  ngOnInit(): void {
    this.techs = this.techService.fetchTechs();
  }

}
