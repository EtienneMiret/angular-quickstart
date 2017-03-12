import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tech } from './tech';

@Injectable()
export class TechService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: Http
  ) {}

  fetchAll(): Promise<Tech[]> {
    return this.http.get('api/techs')
      .toPromise()
      .then(response => response.json().data as Tech[]);
  }

  fetchTop(): Promise<Tech[]> {
    return this.fetchAll()
      .then(techs => {
        const sorted = techs.slice();
        sorted.sort((a, b) => b.grade - a.grade);
        return sorted.slice(0, 5);
      });
  }

  fetchOne(id: number): Promise<Tech> {
    return this.http.get(`api/techs/${id}`)
      .toPromise()
      .then(response => response.json().data as Tech);
  }

  update(tech: Tech): Promise<Tech> {
    return this.http.put(`api/techs/${tech.id}`, JSON.stringify(tech), this.headers)
      .toPromise()
      .then(() => tech);
  }

}
