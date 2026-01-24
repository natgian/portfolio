import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer, TranslatePipe, RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.css',
})

/**
 * Page component responsible for rendering the legal page.
 */
export class LegalNotice {}
