import { Component, OnInit } from '@angular/core';
import { TechSearchService } from './tech-search.service';
import { Observable, Subject } from 'rxjs';
import { Tech } from './tech';

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
    console.log('Searching:', term);
    this.searchTerms.next(term);
  }

}
