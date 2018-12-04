import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Book, Thumbnail} from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
})
export class BookListComponent implements OnInit {
  books: Array<Book>;
  @Output() showBookDetailsEvent = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {
    this.books = [
      new Book(
          '9783864903571', 'Angular', ['Hans Wurst', 'Wans Hurst'], new Date(2017, 3, 1),
          'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4, inkl. Native Script und Redux', 5,
          [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')], 'Mit Angular wird alles besser!'),
      new Book(
          '9783864901546', 'AngularJS', ['Hans Wurst', 'Wans Hurst'], new Date(2014, 5, 29), 'eine praktische Einführung', 5,
          [new Thumbnail('https://ng-buch.de/cover1.jpg', 'Buchcover')],
          'AngularJS ist schon toll, aber mittlerweile auch ein bischen veraltet...')
    ];
  }

  showDetails(book: Book) {
    this.showBookDetailsEvent.emit(book);
  }
}
