import { Component, Input } from '@angular/core';
import { Tech } from './tech';

@Component({
  moduleId: module.id,
  selector: 'my-tech-detail',
  styleUrls: ['tech-detail.component.css'],
  templateUrl: 'tech-detail.component.html'
})
export class TechDetailComponent {

  @Input()
  tech: Tech;

}
