
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Stock} from './Stock';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  /** GET stock by Description. Will 404 if id not found */
  getStock(Cusip: string): Observable<Stock> {
    return this.http.get<Stock>(`api/stocks/?Cusip=${Cusip}`).pipe(
      catchError(this.handleError<Stock>(`getStock Cusip=${Cusip}`))
    );
  }

  /* Search stocks whose name contains search term */
  searchStocks(term: string): Observable<Stock[]> {
    if (!term.trim()) {
      // if not search term, return empty stocks array.
      return of([]);
    }
    return this.http.get<Stock[]>(`api/stocks/?Description=^${term}`).pipe(
      catchError(this.handleError<Stock[]>('searchStocks', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
