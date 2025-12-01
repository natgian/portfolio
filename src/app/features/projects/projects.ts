import { Component } from '@angular/core';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';

@Component({
  selector: 'app-projects',
  imports: [SectionIntro],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  isDarkBackground = false;

  aboutIntro = {
    intro: 'MY CRAFT',
    title: 'Projects',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quaerat? Sed aliquid
    voluptatum enim! Optio deleniti necessitatibus blanditiis dolores maxime unde non beatae rem,
    aliquam impedit et earum, nihil dicta.`,
    imgSrc: '/img/ui-elements/underline_4.png',
  };
}
