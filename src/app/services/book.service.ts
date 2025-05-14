import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BookViewModel } from '../models/book-viewmodel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _httpClient: HttpClient
  private url = environment.api

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
   }


  getBooks(){
    return this._httpClient.get<BookViewModel[]>(this.url + "/Book");
  }

  getBookById(id: number){
    return this._httpClient.get<BookViewModel>(this.url + "/Book/" + id);
  }

  getBooksByAuthorId(){

  }

  createBook(){

  }

  updateBook(){

  }

  deleteBook(){

  }
}
