import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Book} from '../shared/book';

@Component({selector: 'bm-book-details', templateUrl: './book-details.component.html', styles: []})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  @Output() showBookListEvent = new EventEmitter<any>();
  constructor() {}

  getRating(num: number): Array<number> {
    return new Array<number>(num);
  }

  ngOnInit() { }

  showBookList()
  {
    this.showBookListEvent.emit();
  }
}
