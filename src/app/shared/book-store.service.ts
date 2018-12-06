import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';

import {Book, Thumbnail} from '../shared/book';
import {BookFactory} from '../shared/book-factory';

@Injectable({providedIn: 'root'})
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';
  private headers: HttpHeaders = new HttpHeaders();
  books: Array<Book>;
  constructor(private httpClient: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  private apiErrorHandler(error: Error|any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<Book>> {
    return this.httpClient.get(`${this.api}/books`)
        .pipe(retry(3), catchError(this.apiErrorHandler))
        .pipe(map(rawBooks => rawBooks.map(rawBook => BookFactory.fromObject(rawBook))));
  }

  getSingle(isbn: string): Observable<Book> {
    return this.httpClient.get(`${this.api}/book/${isbn}`)
        .pipe(retry(3), catchError(this.apiErrorHandler))
        .pipe(map(rawBook => BookFactory.fromObject(rawBook)));
  }

  create(book: Book): Observable<any> {
    return this.httpClient.post(`${this.api}/book`, JSON.stringify(book), {headers: this.headers}).pipe(catchError(this.apiErrorHandler));
  }

  update(book: Book): Observable<any> {
    return this.httpClient.put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), {headers: this.headers})
        .pipe(catchError(this.apiErrorHandler));
  }

  remove(isbn: string): Observable<any> {
    return this.httpClient.delete(`${this.api}/book/${isbn}`).pipe(catchError(this.apiErrorHandler));
  }
}
