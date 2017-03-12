import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Tech } from './tech';
import { TechService } from './tech.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-tech-detail',
  styleUrls: ['tech-detail.component.css'],
  templateUrl: 'tech-detail.component.html'
})
export class TechDetailComponent implements OnInit {

  tech: Tech;

  constructor(
    private techService: TechService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route
      .params
      .switchMap((params: Params) => this.techService.fetchTech(+params['id']))
      .subscribe(tech => this.tech = tech);
  }

}
