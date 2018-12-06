import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({selector: 'bm-search', templateUrl: './search.component.html', styles: []})
export class SearchComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<Book>();
  foundBooks: Array<Book> = [];
  isLoading = false;
  keyUp = new EventEmitter<string>();
  constructor(private bookService: BookStoreService) {}

  ngOnInit() {
    this.keyUp.pipe(debounceTime(500))
        .pipe(distinctUntilChanged())
        .pipe(tap(i => this.isLoading = true))
        .pipe(switchMap<string, Array<Book>>(searchTerm => this.bookService.getAllSearch(searchTerm)))
        .pipe(tap(i => this.isLoading = false))
        .subscribe(b => this.foundBooks = b);
  }
}
