import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrimInput]',
})

/**
 * This directive removes whitespace from an input field when the user stops interacting with it.
 * It is used for the form validation.
 *
 * Usage:
 * - import the directive in component
 * - add the attribute "appTrimInput" to the input
 *
 */
export class TrimInput {
  /**
   *
   * @param ngControl - Accesses the connected form control to update the value
   */
  constructor(private ngControl: NgControl) {}

  /**
   * Listens to the "blur" event when the input loses focus and trims the value if it's a string.
   */
  @HostListener('blur')
  onBlur() {
    const value = this.ngControl.control?.value;

    if (typeof value === 'string') {
      this.ngControl.control?.setValue(value.trim());
    }
  }
}
