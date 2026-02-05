import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reference-card',
  imports: [],
  templateUrl: './reference-card.html',
  styleUrl: './reference-card.css',
})

/**
 * Renders a single reference card in the "references" section.
 * Receives reference data via @Input properties and emits events when the card is hovered.
 */
export class ReferenceCard {
  @Input() name!: string;
  @Input() role!: string;
  @Input() text!: string;
  @Input() link!: string;
  @Input() linkIcon!: string;
  @Input() backgroundImg!: string;

  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseLeave = new EventEmitter<void>();
}
