import { Component, Input } from '@angular/core';
import { Tech } from './tech';

@Component({
  selector: 'my-tech-detail',
  styleUrls: ['app/tech-detail.component.css'],
  templateUrl: 'app/tech-detail.component.html'
})
export class TechDetailComponent {

  @Input()
  tech: Tech;

}
