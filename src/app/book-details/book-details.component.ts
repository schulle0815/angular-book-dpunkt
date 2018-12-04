import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({selector: 'bm-book-details', templateUrl: './book-details.component.html', styles: []})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookStoreService, private route: ActivatedRoute) {}

  getRating(num: number): Array<number> {
    return new Array<number>(num);
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.book = this.bookService.getSingle(params['isbn']);
  }
}
