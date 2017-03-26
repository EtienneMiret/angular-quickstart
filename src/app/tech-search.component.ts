import { Component, OnInit } from '@angular/core';
import { TechSearchService } from './tech-search.service';
import { Tech } from './tech';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'tech-search',
  templateUrl: 'tech-search.component.html',
  styleUrls: ['tech-search.component.css'],
  providers: [TechSearchService]
})
export class TechSearchComponent implements OnInit {

  public techs: Observable<Tech[]>;
  private searchTerms: Subject<string>;

  constructor(
    private techSearchService: TechSearchService
  ) {}

  ngOnInit() {
    this.searchTerms = new Subject<string>();
    this.techs = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.techSearchService.search(term) : Observable.of([]));
  }

  search(term: string) {
    console.log('Input:', term);
    this.searchTerms.next(term);
  }

}
