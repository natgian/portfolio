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
export class Contact {}
