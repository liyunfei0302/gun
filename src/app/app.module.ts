import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GunItemComponent} from './gun-item/gun-item.component';
import {AppRoutingModule} from './app-routing.module';
import {GunListComponent} from './gun-list/gun-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GunListComponent,
    GunItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
