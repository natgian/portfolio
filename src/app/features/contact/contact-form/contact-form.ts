import { Component } from '@angular/core';

import { Button } from '../../../shared/components/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  isDarkBackground = true;

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      Validators.maxLength(254),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(2000),
    ]),
  });

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  handleSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
