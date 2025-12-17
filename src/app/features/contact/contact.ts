import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
