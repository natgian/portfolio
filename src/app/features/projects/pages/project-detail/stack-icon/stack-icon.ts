import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-icon',
  imports: [],
  templateUrl: './stack-icon.html',
  styleUrl: './stack-icon.css',
})

/**
 * Renders a stack icon with a label.
 * Receives @Input properties for the icon image URL and the skill label.
 */
export class StackIcon {
  @Input() icon!: string;
  @Input() label!: string;
}
