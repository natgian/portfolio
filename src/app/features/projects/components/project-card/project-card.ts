import { Component, Input } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-project-card',
  imports: [Button],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})

/**
 * Renders a single project card in the "projects" section.
 * Receives project data and layout flags via @Input properties.
 */
export class ProjectCard {
  @Input() id!: string;
  @Input() name!: string;
  @Input() cardImg!: string;
  @Input() cardDescription!: string;
  @Input() cta!: string;
  @Input() isFeatured!: boolean;
  @Input() isDesktopLayout!: boolean;

  /**
   * Indicates if the project card is displayed on a dark background.
   */
  isDarkBackground = false;

  /**
   * Initializes the dark background state based on the layout type.
   * If the card is displayed in desktop layout, 'isDarkBackground' is set to 'true'.
   */
  ngOnInit() {
    this.isDarkBackground = this.isDesktopLayout ? true : false;
  }
}
