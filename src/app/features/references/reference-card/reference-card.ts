import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reference-card',
  imports: [],
  templateUrl: './reference-card.html',
  styleUrl: './reference-card.css',
})
export class ReferenceCard {
  @Input() name!: string;
  @Input() role!: string;
  @Input() text!: string;
  @Input() link!: string;
  @Input() backgroundImg!: string;
  @Input() backgroundImgMobile!: string;

  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseLeave = new EventEmitter<void>();
}
