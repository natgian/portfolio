import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';

@Component({
  selector: 'app-about',
  imports: [Button, SectionIntro],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  isDarkBackground = false;

  aboutIntro = {
    intro: "WHO'S NATHALIE",
    title: 'About me',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quaerat? Sed aliquid
    voluptatum enim! Optio deleniti necessitatibus blanditiis dolores maxime unde non beatae rem,
    aliquam impedit et earum, nihil dicta.`,
    imgSrc: '/img/ui-elements/secondary_underline.png',
  };
}
