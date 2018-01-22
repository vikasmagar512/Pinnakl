import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailComponent} from './detail/detail.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  // { path: 'search', component: AppComponent,
  { path: 'search/:Cusip', component: DetailComponent
  /*children: [
    { path: 'search/:Cusip', component: DetailComponent},
  ]*/}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
