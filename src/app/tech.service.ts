import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tech } from './tech';

@Injectable()
export class TechService {

  constructor(
    private http: Http
  ) {}

  fetchTechs(): Promise<Tech[]> {
    return this.http.get('api/techs')
      .toPromise()
      .then(response => response.json().data as Tech[]);
  }

  fetchTopTechs(): Promise<Tech[]> {
    return this.fetchTechs()
      .then(techs => {
        const sorted = techs.slice();
        sorted.sort((a, b) => b.grade - a.grade);
        return sorted.slice(0, 5);
      });
  }

  fetchTech(id: number): Promise<Tech> {
    return this.http.get(`api/techs/${id}`)
      .toPromise()
      .then(response => response.json().data as Tech);
  }

}
