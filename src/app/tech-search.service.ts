import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Tech } from './tech';

@Injectable()
export class TechSearchService {

  constructor(
    private http: Http
  ) {}

  search(term: string): Observable<Tech[]> {
    return this.http
      .get(`app/techs/?name=${term}`)
      .map(response => response.json().data as Tech[]);
  }

}
