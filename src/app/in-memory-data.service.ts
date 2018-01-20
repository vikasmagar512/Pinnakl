import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stocks = [
      {SecType: 'bond', Ticker: 'adct', Cusip: '000886aa9', Description: 'Adc Telecomm - B 1.12113% 06/15/13 144a'},
      {SecType: 'bond', Ticker: 'adct', Cusip: '000886ac5', Description: 'Adc Telecomm - A 1.0% 06/15/08 144a'},
      {SecType: 'bond', Ticker: 'tyc', Cusip: '000945ac9', Description: 'Tyc-call07/05 0.0% 07/06/10'},
      {SecType: 'bond', Ticker: 'asmif', Cusip: '00207dad4', Description: 'Asm Intl Nv 5.25% 05/15/10 144a'},
      {SecType: 'bond', Ticker: 'atmi', Cusip: '00207raa9', Description: 'Atmi Inc 5.25% 11/15/06 144a'},
      {SecType: 'bond', Ticker: 'asml', Cusip: '00208paa2', Description: 'Asm Lithography 5.75% 10/15/06 144a'},
      {SecType: 'bond', Ticker: 'abgx', Cusip: '00339baa5', Description: 'Amgn-call05/06 3.5% 03/15/07 144a'},
      {SecType: 'bond', Ticker: 'acxm', Cusip: '005125aa7', Description: 'Acxiom Corp 3.75% 02/15/09 144a'},
      {SecType: 'bond', Ticker: 'adpt', Cusip: '00651fac2', Description: 'Adpt-call06/03 4.75% 02/01/04'},
    ];
    return {stocks};
  }
}
