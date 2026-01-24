import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [NgClass, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.css',
})

/**
 * Renders a configurable button.
 * Accepts input properties to control text, style variant, disabled state, routing,
 * and link behavior.
 */
export class Button {
  @Input() buttonText = '';
  @Input() disabled = false;

  /**
   * The visual style of the button can be "light" or "dark".
   */
  @Input() variant: 'light' | 'dark' = 'light';

  /**
   * Optional router link to navigate.
   */
  @Input() routerLink?: string | string[];

  /**
   * Optional fragment to append to the router link URL.
   */
  @Input() fragment?: string;

  /**
   * Optional href for an external link.
   */
  @Input() href?: string;

  /**
   * Optional type attribute for the button.
   */
  @Input() type?: 'submit';
}
