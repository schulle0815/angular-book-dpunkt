import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookListComponent} from './book-list/book-list.component';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {BookStoreService} from './shared/book-store.service';

const declarations = [
  AppComponent,
  BookListComponent,
  BookListItemComponent,
  BookDetailsComponent,
  HomeComponent,
  SearchComponent,
];

const imports =
    [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
    ]

    const services = [
      BookStoreService,
    ];


@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [...imports],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {
}
