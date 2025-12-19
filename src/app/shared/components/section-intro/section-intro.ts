import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-intro',
  imports: [],
  templateUrl: './section-intro.html',
  styleUrl: './section-intro.css',
})
export class SectionIntro {
  @Input() intro!: string;
  @Input() title!: string;
  @Input() imgSrc!: string;
  @Input() text!: string[];
  @Input() isDarkBackground = false;
}
