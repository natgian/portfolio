import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
/**
 * Renders the page not found component.
 */
export class NotFound {}
