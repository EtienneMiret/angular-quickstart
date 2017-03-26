import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Tech } from './tech';

import 'rxjs/add/operator/map';

@Injectable()
export class TechSearchService {

  constructor(
    private http: Http
  ) {}

  search(term: string): Observable<Tech[]> {
    console.log('Searching:', term);
    return this.http
      .get(`app/techs/?name=${term}`)
      .map(response => response.json().data as Tech[]);
  }

}
