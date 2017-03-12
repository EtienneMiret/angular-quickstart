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
      .then(techs => {
        const sorted = techs.slice();
        sorted.sort((a, b) => b.grade - a.grade);
        return sorted.slice(0, 5);
      });
  }

  fetchTech(id: number): Promise<Tech> {
    return Promise.resolve(techs.filter(t => t.id === id)[0]);
  }

}
