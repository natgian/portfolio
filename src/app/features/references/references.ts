import { Component } from '@angular/core';
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
  references = [
    {
      name: 'Nico Zinngrebe',
      role: 'home.references.nico.role',
      text: 'home.references.nico.text',
      link: 'https://www.linkedin.com/in/nico-zinngrebe-25977a33a',
      backgroundImg: '/img/stickers/reference_bg_1.png',
      cardRotation: '-6deg',
      offsetY: '20',
    },
    {
      name: 'Wladislav Bender',
      role: 'home.references.wladi.role',
      text: 'home.references.wladi.text',
      link: 'https://www.xing.com/profile/Wladislav_Bender',
      backgroundImg: '/img/stickers/reference_bg_2.png',
      cardRotation: '0deg',
      offsetY: '40',
    },
    {
      name: 'Christian Buchs',
      role: 'home.references.chris.role',
      text: 'home.references.chris.text',
      link: 'https://linkedin.com/in/christian-buchs-a219b0121',
      backgroundImg: '/img/stickers/reference_bg_1.png',
      cardRotation: '6deg',
      offsetY: '20',
    },
  ];
}
