import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-section-intro',
  imports: [TranslatePipe],
  templateUrl: './section-intro.html',
  styleUrl: './section-intro.css',
})

/**
 * Renders the introduction area of a section.
 * Receives data via @Input properties:
 * - intro: translation key for the introduction text
 * - title: translation key for the section title
 * - text: array of translation keys for the paragraph texts
 * - imgSrc: URL of the UI underline image (used for the animated title underline)
 * - isDarkBackground: flag indicating if the section is rendered on a dark background
 */
export class SectionIntro {
  @Input() intro!: string;
  @Input() title!: string;
  @Input() imgSrc!: string;
  @Input() text!: string[];
  @Input() isDarkBackground = false;
}
