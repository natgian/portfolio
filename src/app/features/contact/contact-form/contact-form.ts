import { Component } from '@angular/core';

import { Button } from '../../../shared/components/button/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  isDarkBackground = true;

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  handleSubmit() {
    console.log({
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    });
  }
}
