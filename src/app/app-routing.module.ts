import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListComponent} from './book-list/book-list.component';
import {HomeComponent} from './home/home.component';
import {ReactiveDemoComponent} from './reactive-demo/reactive-demo.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/:isbn', component: BookDetailsComponent},
  {path: 'reactive', component: ReactiveDemoComponent},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
