import { Component, HostListener } from '@angular/core';
import { ReferenceCard } from './reference-card/reference-card';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Represents a reference in the "references" section.
 */
interface Reference {
  name: string;
  role: string;
  text: string;
  link: string;
  linkIcon: string;
  backgroundImgLarge: string;
  backgroundImgMedium: string;
  backgroundImgSmall: string;
}

@Component({
  selector: 'app-references',
  imports: [ReferenceCard, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.css',
})

/**
 * Component responsible for rendering the "references" section on the main page.
 * Displays reference cards with responsive backgrounds.
 */
export class References {
  /**
   * Holds the index of the currently hovered reference card.
   * Null means no card is hovered.
   */
  hoveredIndex: number | null = null;

  /**
   * Holds the current viewport size to determine the background image.
   */
  currentViewport: 'large' | 'medium' | 'small' = 'large';

  /**
   * An array of objects containing the data for each reference card.
   */
  references: Reference[] = [
    {
      name: 'Nico Zinngrebe',
      role: 'home.references.nico.role',
      text: 'home.references.nico.text',
      link: 'https://www.linkedin.com/in/nico-zinngrebe-25977a33a',
      linkIcon: '/img/icons/linkedin.svg',
      backgroundImgLarge: '/img/stickers/reference_bg_1_large.png',
      backgroundImgMedium: '/img/stickers/reference_bg_1_medium.png',
      backgroundImgSmall: '/img/stickers/reference_bg_1_small.png',
    },
    {
      name: 'Wladislav Bender',
      role: 'home.references.wladi.role',
      text: 'home.references.wladi.text',
      link: 'https://www.xing.com/profile/Wladislav_Bender',
      linkIcon: '/img/icons/xing.svg',
      backgroundImgLarge: '/img/stickers/reference_bg_2_large.png',
      backgroundImgMedium: '/img/stickers/reference_bg_2_medium.png',
      backgroundImgSmall: '/img/stickers/reference_bg_2_small.png',
    },
  ];

  /**
   * Updates the current viewport variable on initialization.
   */
  ngOnInit() {
    this.updateViewport();
  }

  /**
   * Listens for resizing of the viewport to update responsive background images.
   */
  @HostListener('window:resize')
  onResize() {
    this.updateViewport();
  }

  /**
   * Updates the currentViewport value based on the window width.
   * Used to select the appropriate background image for each reference card.
   */
  private updateViewport() {
    const width = window.innerWidth;

    if (width <= 415) {
      this.currentViewport = 'small';
    } else if (width <= 600) {
      this.currentViewport = 'medium';
    } else {
      this.currentViewport = 'large';
    }
  }

  /**
   * Gets the background image for the reference card depending on the current viewport size.
   *
   * @param reference - The reference card object
   * @returns - The URL of the background image based on the viewport size
   */
  getBackgroundImage(reference: Reference): string {
    if (this.currentViewport === 'small') return reference.backgroundImgSmall;
    if (this.currentViewport === 'medium') return reference.backgroundImgMedium;
    return reference.backgroundImgLarge;
  }
}
