import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthorViewModel } from '../models/author-viewmodel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private _httpClient: HttpClient
  private url = environment.api

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
   }

  getAuthors(){
    return this._httpClient.get<AuthorViewModel[]>(this.url + "/Author")
  }

  getAuthorById(id: number){
    return this._httpClient.get<AuthorViewModel>(this.url + "/Author/" + id)
  }

  createAuthor(){

  }

  updateAuthor(){

  }

  deleteAuthor(){

  }
}
