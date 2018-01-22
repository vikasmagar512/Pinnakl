import { InMemoryDbService } from 'angular-in-memory-web-api';
import {data} from './security';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stocks = data
    return {stocks};
  }
}
