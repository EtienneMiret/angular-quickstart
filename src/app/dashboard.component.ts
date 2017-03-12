import { Component, OnInit } from '@angular/core';
import { Tech } from './tech';
import { TechService } from './tech.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  techs: Tech[];

  constructor(
    private techService: TechService
  ) {}

  ngOnInit(): void {
    this.techService.fetchTop().then(techs => this.techs = techs);
  }

}
