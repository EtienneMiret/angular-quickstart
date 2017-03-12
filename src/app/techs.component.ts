import { Component, OnInit } from '@angular/core';
import { Tech } from './tech';
import { TechService } from './tech.service';

@Component({
  selector: 'my-techs',
  styleUrls: ['app/style.css'],
  templateUrl: 'app/techs.component.html'
})
export class TechsComponent implements OnInit {

  techs: Tech[];

  selected: Tech = null;

  constructor(
    private techService: TechService
  ) {}

  ngOnInit(): void {
    this.techService.fetchTechs().then(techs => this.techs = techs);
  }

}
