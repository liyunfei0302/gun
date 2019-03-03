import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GunItemComponent} from './gun-item/gun-item.component';
import {GunListComponent} from './gun-list/gun-list.component';

const routes: Routes = [
  {
    path: '',
    component: GunListComponent
  }, {
    path: 'item/:index',
    component: GunItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
