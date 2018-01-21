import { Component, OnInit, Input } from '@angular/core';
import {Stock} from '../Stock';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import {SearchService} from '../search/search.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  stock: Stock;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _searchService: SearchService,
    private router: Router
    ) {
      this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe(path => {
        console.log('path = ', path);
        this.getStock();
      });
  }

  getStock(): void {
    const Cusip = this.route.snapshot.paramMap.get('Cusip');
    console.log(Cusip);
    this._searchService.getStock(Cusip).subscribe(stock => {
        this.stock = stock[0];
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
