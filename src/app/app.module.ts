import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookStoreService} from './shared/book-store.service';
import { HomeComponent } from './home/home.component';

const declarations = [
  BookListComponent,
  BookListItemComponent,
  BookDetailsComponent,
];

const services = [
  BookStoreService,
];


@NgModule({
  declarations: [
    AppComponent,
    ...declarations,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {
}
