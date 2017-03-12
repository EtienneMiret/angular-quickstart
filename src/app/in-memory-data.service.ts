import { InMemoryDbService } from 'angular-in-memory-web-api';
import { techs } from './tech-list';

export class InMemoryDataSerice implements InMemoryDbService {

  createDb(): {} {
    return {techs};
  }

}
