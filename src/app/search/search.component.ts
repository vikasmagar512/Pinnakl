import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {SearchService} from '../search.service';
import {Stock} from '../Stock';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  queryField: FormControl = new FormControl();
  constructor(private _searchService: SearchService){
  }
  stocks: Stock[] = [];

  hideList() {
    this.stocks = [];
  }
  ngOnInit() {
    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap((query) => {
          return this._searchService.searchStocks(query);
        }
      )
      .subscribe(stocks => this.stocks = stocks);
  }
}

