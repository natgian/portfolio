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

/**
 * Component responsible for rendering the contact form in the "contact" secction.
 * It contains the form validation, the post request to the backend and handles the hover states.
 */
export class ContactForm {
  isSubmitting = false;
  showSuccessMessage = false;

  /**
   * Indicates if the section is displayed on a dark background.
   */
  isDarkBackground = true;

  /**
   * Indicates if an input field is currently hovered.
   * Used to update CSS styles dynamically.
   */
  hoverStates = [false, false, false];

  /**
   * Indicates if an input field is currently focused.
   * Used to update CSS styles dynamically.
   */
  focusStates = [false, false, false];

  /**
   * Injects the HttpClient to send HTTP requests.
   */
  http = inject(HttpClient);

  /**
   * Defines endpoint, body and options for the HTTP POST request.
   */
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

  /**
   * Form controls with validation for name, email, message and checkbox fields.
   */
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'),
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

  /**
   * Handles the form submissions by:
   * - validating the form
   * - setting the submission state
   * - sending the form data via HTTP POST request
   * - resetting the form after success
   * - handling errors
   */
  handleSubmit() {
    if (!this.validateForm()) return;
    this.isSubmitting = true;

    this.http.post(this.post.endPoint, this.post.body(this.contactForm.value)).subscribe({
      next: (response) => {
        this.resetFormAfterSuccess();
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  /**
   * Marks all form controls as 'touched' to trigger validation errors.
   * Indicates if the form is valid.
   */
  private validateForm() {
    this.contactForm.markAllAsTouched();
    return this.contactForm.valid;
  }

  /**
   * Resets the form, shows the success message and updates the submission state after the successful
   * HTTP request.
   */
  private resetFormAfterSuccess() {
    this.contactForm.reset();
    this.showSuccessMessage = true;
    this.isSubmitting = false;
    this.removeSuccessMessage();
  }

  /**
   * Removes the success message after 5 seconds.
   */
  private removeSuccessMessage() {
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }

  /**
   * Handles errors from the HTTP request and resets the submission state.
   *
   * @param error - The error returned by the HTTP request
   */
  private handleError(error: any) {
    console.error(error);
    this.isSubmitting = false;
  }

  /**
   * Marks the current input field and the previous one (if any) as hovered.
   * These hover states are used to update CSS styles dynamically.
   *
   * @param index - The index of the currently hovered input field
   */
  onMouseEnter(index: number) {
    this.hoverStates[index] = true;
    if (index > 0) this.hoverStates[index - 1] = true;
  }

  /**
   * Marks the current input field and the previous one (if any) as not hovered.
   * These hover states are used to update CSS styles dynamically.
   *
   * @param index - The index of the input field the mouse has left
   */
  onMouseLeave(index: number) {
    this.hoverStates[index] = false;
    if (index > 0) this.hoverStates[index - 1] = false;
  }

  /**
   * Marks the current input field and the previous one (if any) as focused.
   * These focus states are used to update CSS styles dynamically.
   *
   * @param index - The index of the currently focused input field
   */
  onFocus(index: number) {
    this.focusStates[index] = true;
    if (index > 0) this.focusStates[index - 1] = true;
  }

  /**
   * Marks the current input field and the previous one (if any) as not focused.
   * These focus states are used to update CSS styles dynamically.
   *
   * @param index - - The index of the input field that has currently lost focus
   */
  onBlur(index: number) {
    this.focusStates[index] = false;
    if (index > 0) this.focusStates[index - 1] = false;
  }
}
