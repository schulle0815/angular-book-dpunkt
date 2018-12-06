import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Book} from '../shared/book';
import {BookFactory} from '../shared/book-factory';
import {BookStoreService} from '../shared/book-store.service';

@Component({selector: 'bm-book-details', templateUrl: './book-details.component.html', styles: []})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();

  constructor(private bookService: BookStoreService, private route: ActivatedRoute, private router: Router) {}

  getRating(num: number): Array<number> {
    return new Array<number>(num);
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bookService.getSingle(params['isbn']).subscribe(b => this.book = b);
  }

  private removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bookService.remove(this.book.isbn).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    }
  }
}
