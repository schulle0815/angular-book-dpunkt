import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Book, Thumbnail} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
})
export class BookListComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookStoreService) {}

  ngOnInit() {
    this.books = this.bookService.getAll();
  }
}
