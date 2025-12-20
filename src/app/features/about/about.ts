import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Button, SectionIntro, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  isDarkBackground = false;

  aboutIntro = {
    intro: "WHO'S NATHALIE",
    title: 'About me',
    text: [
      `Hey there, I’m Nathalie — a Fullstack Developer and nature lover, passionate about coding because it combines logical thinking with creativity.`,
      `My main source of inspiration is the continuous learning process that comes with real-world challenges. Each bug, feature, or refactor is an opportunity to better understand how things work and how they can be improved. I actively look for efficient and maintainable solutions, learning from feedback, documentation, and experimentation.`,
      `I value clean code, clear communication, and collaboration, and I approach challenges with curiosity and persistence.`,
    ],
    imgSrc: '/img/ui-elements/secondary_underline.png',
  };
}
