import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[] = ['VIKAS'];
  queryField: FormControl = new FormControl();
  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap((query) =>  {
        alert(`query ${query}`)
        return this._searchService.search(query)}
      )
      .subscribe( result => {  if (result.status === 400) { return; } else { this.results = result.json().artists.items; }
    });

}

