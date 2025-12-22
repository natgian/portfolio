import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-icon',
  imports: [],
  templateUrl: './stack-icon.html',
  styleUrl: './stack-icon.css',
})
export class StackIcon {
  @Input() icon!: string;
  @Input() label!: string;
}
