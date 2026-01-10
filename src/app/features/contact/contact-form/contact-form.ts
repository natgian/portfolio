import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Button } from '../../../shared/components/button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  imports: [Button, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  isDarkBackground = true;
  hoverStates = [false, false, false];
  focusStates = [false, false, false];
  isSubmitting = false;
  showSuccessMessage = false;

  http = inject(HttpClient);

  post = {
    endPoint: 'https://natgian.dev/backend/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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
    checkbox: new FormControl(false, [Validators.requiredTrue]),
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

  get checkbox() {
    return this.contactForm.get('checkbox');
  }

  handleSubmit() {
    this.contactForm.markAllAsTouched();
    if (!this.contactForm.valid) return;

    this.isSubmitting = true;

    this.http.post(this.post.endPoint, this.post.body(this.contactForm.value)).subscribe({
      next: (response) => {
        this.contactForm.reset();
        this.showSuccessMessage = true;
        this.isSubmitting = false;

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      },
      error: (error) => {
        console.error(error);
        this.isSubmitting = false;
      },
    });
  }

  onMouseEnter(index: number) {
    this.hoverStates[index] = true;
    if (index > 0) this.hoverStates[index - 1] = true;
  }

  onMouseLeave(index: number) {
    this.hoverStates[index] = false;
    if (index > 0) this.hoverStates[index - 1] = false;
  }

  onFocus(index: number) {
    this.focusStates[index] = true;
    if (index > 0) this.focusStates[index - 1] = true;
  }

  onBlur(index: number) {
    this.focusStates[index] = false;
    if (index > 0) this.focusStates[index - 1] = false;
  }
}
