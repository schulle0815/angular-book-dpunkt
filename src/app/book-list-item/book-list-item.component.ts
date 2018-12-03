import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../shared/book';

// tslint:disable-next-line:component-selector
@Component({selector: 'a.bm-book-list-item', templateUrl: './book-list-item.component.html', styles: []})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;
  constructor() {}

  ngOnInit() {}
}
