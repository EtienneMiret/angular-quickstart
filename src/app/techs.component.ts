import { Component, OnInit } from '@angular/core';
import { Tech } from './tech';
import { TechService } from './tech.service';

@Component({
  moduleId: module.id,
  selector: 'my-techs',
  styleUrls: ['style.css'],
  templateUrl: 'techs.component.html'
})
export class TechsComponent implements OnInit {

  techs: Tech[];

  selected: Tech = null;

  constructor(
    private techService: TechService
  ) {}

  ngOnInit(): void {
    this.techService.fetchAll().then(techs => this.techs = techs);
  }

}
