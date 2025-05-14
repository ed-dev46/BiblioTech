import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { AuthorViewModel } from '../../models/author-viewmodel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-form',
  imports: [],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent {

    private _authorServices: AuthorService;
    authors: AuthorViewModel[] = []

    constructor(authorServices: AuthorService) {
      this._authorServices = authorServices;

      this.getAuthors();
    }

    getAuthors(){
      this._authorServices.getAuthors().subscribe(authors => this.authors = authors);
    }

}
