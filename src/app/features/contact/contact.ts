import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { Footer } from '../../layout/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, Footer, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

/**
 * Component responsible for rendering the "contact" section on the main page.
 */
export class Contact {}
