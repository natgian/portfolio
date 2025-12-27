import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [NgClass, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() buttonText = '';
  @Input() variant: 'light' | 'dark' = 'light';
  @Input() disabled = false;
  @Input() routerLink?: string | string[];
  @Input() fragment?: string;
  @Input() href?: string;
  @Input() type?: 'submit';
}
