import { Injectable } from '@angular/core';
import { Tech } from './tech';
import { techs } from './tech-list';

@Injectable()
export class TechService {

  fetchTechs(): Promise<Tech[]> {
    return Promise.resolve(techs);
  }

  fetchTopTechs(): Promise<Tech[]> {
    return this.fetchTechs()
      .then(techs => techs.slice(0, 5));
  }

}
