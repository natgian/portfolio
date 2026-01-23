import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [Button, SectionIntro, RouterLink, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

/**
 * Component responsible for rendering the "about" section on the main page.
 * It provides translated content and configuration data used in the template.
 */
export class About {
  /**
   * Indicates if the section is displayed on a dark background.
   */
  isDarkBackground = false;

  /**
   * Configuration object for the about section intro.
   * Contains translation keys and assets that are used by the SectionIntro component.
   */
  aboutIntro = {
    intro: 'home.about.intro',
    title: 'home.about.title',
    text: ['home.about.description.0', 'home.about.description.1', 'home.about.description.2'],
    imgSrc: '/img/ui-elements/secondary_underline.png',
  };
}
