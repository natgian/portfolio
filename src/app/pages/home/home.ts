import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Header } from '../../layout/header/header';
import { Hero } from '../../features/hero/hero';
import { About } from '../../features/about/about';
import { Skills } from '../../features/skills/skills';
import { Projects } from '../../features/projects/projects';
import { References } from '../../features/references/references';
import { Contact } from '../../features/contact/contact';
import { ScrollTopButton } from '../../shared/components/scroll-top-button/scroll-top-button';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Skills, Projects, References, Contact, ScrollTopButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

/**
 * Page component responsible for rendering the main page.
 * Sets the translated SEO meta tags on component initialization.
 *
 */
export class Home {
  /**
   * Configuration data for the meta tags.
   */
  private readonly META_CONFIG = [
    { key: 'metaData.description', attr: 'name', value: 'description' },
    { key: 'metaData.description', attr: 'property', value: 'og:description' },
    { key: 'metaData.ogImage', attr: 'property', value: 'og:image' },
  ];

  /**
   * Subscription to language change events.
   */
  sub: Subscription;

  /**
   * Initializes translated meta tags and subscribes to language change events.
   *
   * @param meta - Angular service for managing HTML meta tags
   * @param translate - ngx-translate service for handling translations
   */
  constructor(
    private meta: Meta,
    private translate: TranslateService,
  ) {
    this.setMetaTranslations();

    this.sub = this.translate.onLangChange.subscribe(() => {
      this.setMetaTranslations();
    });
  }

  /**
   * Sets the translations for the meta tags.
   */
  private setMetaTranslations() {
    this.META_CONFIG.forEach((meta) => {
      this.translate.get(meta.key).subscribe((data) => {
        this.meta.updateTag({
          [meta.attr]: meta.value,
          content: data,
        });
      });
    });
  }
}
