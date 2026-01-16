import { Component, HostListener } from '@angular/core';
import { ReferenceCard } from './reference-card/reference-card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [ReferenceCard, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.css',
})
export class References {
  hoveredIndex: number | null = null;
  currentViewport: 'large' | 'medium' | 'small' = 'large';

  references = [
    {
      name: 'Nico Zinngrebe',
      role: 'home.references.nico.role',
      text: 'home.references.nico.text',
      link: 'https://www.linkedin.com/in/nico-zinngrebe-25977a33a',
      backgroundImgLarge: '/img/stickers/reference_bg_1_large.png',
      backgroundImgMedium: '/img/stickers/reference_bg_1_medium.png',
      backgroundImgSmall: '/img/stickers/reference_bg_1_small.png',
    },
    {
      name: 'Wladislav Bender',
      role: 'home.references.wladi.role',
      text: 'home.references.wladi.text',
      link: 'https://www.xing.com/profile/Wladislav_Bender',
      backgroundImgLarge: '/img/stickers/reference_bg_2_large.png',
      backgroundImgMedium: '/img/stickers/reference_bg_2_medium.png',
      backgroundImgSmall: '/img/stickers/reference_bg_2_small.png',
    },
    {
      name: 'Christian Buchs',
      role: 'home.references.chris.role',
      text: 'home.references.chris.text',
      link: 'https://linkedin.com/in/christian-buchs-a219b0121',
      backgroundImgLarge: '/img/stickers/reference_bg_1_large.png',
      backgroundImgMedium: '/img/stickers/reference_bg_1_medium.png',
      backgroundImgSmall: '/img/stickers/reference_bg_1_small.png',
    },
  ];

  ngOnInit() {
    this.updateViewport();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateViewport();
  }

  private updateViewport() {
    const width = window.innerWidth;

    if (width <= 400) {
      this.currentViewport = 'small';
    } else if (width <= 600) {
      this.currentViewport = 'medium';
    } else {
      this.currentViewport = 'large';
    }
  }

  getBackgroundImage(reference: any): string {
    if (this.currentViewport === 'small') return reference.backgroundImgSmall;
    if (this.currentViewport === 'medium') return reference.backgroundImgMedium;
    return reference.backgroundImgLarge;
  }
}
