import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { BookFormComponent } from './components/book-form/book-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthorFormComponent, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BiblioTech';
}
