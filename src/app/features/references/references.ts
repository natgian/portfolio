import { Component } from '@angular/core';
import { ReferenceCard } from './reference-card/reference-card';

@Component({
  selector: 'app-references',
  imports: [ReferenceCard],
  templateUrl: './references.html',
  styleUrl: './references.css',
})
export class References {
  hoveredIndex: number | null = null;
  references = [
    {
      name: 'Nico Zinngrebe',
      role: 'Join Project Teammate',
      text: 'During the team project, Nathalie impressed with her reliability, helpfulness and active contribution to team development. Even beyond direct collaboration, interacting with her proves to be consistently positive and inspiring.',
      link: 'https://www.linkedin.com/in/nico-zinngrebe-25977a33a',
      backgroundImg: '/img/stickers/reference_bg_1.png',
      cardRotation: '-6deg',
      offsetY: '20',
    },
    {
      name: 'Wladislav Bender',
      role: 'Join Project Teammate',
      text: "I had the pleasure of working with an extremely calm and pleasant person who always approached complex issues with foresight and clarity. Nathalie's professional expertise and understanding of the big picture noticeably enriched our project.",
      backgroundImg: '/img/stickers/reference_bg_2.png',
      link: 'https://www.xing.com/profile/Wladislav_Bender',
      cardRotation: '0deg',
      offsetY: '40',
    },
    {
      name: 'Christian Buchs',
      role: 'Supervisor',
      text: 'coming soon...',
      link: 'https://linkedin.com/in/christian-buchs-a219b0121',
      backgroundImg: '/img/stickers/reference_bg_1.png',
      cardRotation: '6deg',
      offsetY: '20',
    },
  ];
}
