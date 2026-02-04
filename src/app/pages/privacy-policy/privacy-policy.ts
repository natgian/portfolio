import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer, TranslatePipe, RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.css', '../../../styles/legal.css'],
})

/**
 * Page component responsible for rendering the privacy policy page.
 */
export class PrivacyPolicy {
  private sub: Subscription;

  /**
   * Subscribes to TranslationService to detect language changes and set the title tag accordingly.
   *
   * @param titleService - Angular Title service used to set the document title
   * @param translate - ngx-translate service used to fetch the translations
   */
  constructor(
    private titleService: Title,
    private translate: TranslateService,
  ) {
    this.setTitle();

    this.sub = this.translate.onLangChange.subscribe(() => {
      this.setTitle();
    });
  }

  /**
   * Sets the translated title in the document title tag based on the current language.
   */
  private setTitle() {
    this.translate.get('legal.title').subscribe((translatedTitle) => {
      this.titleService.setTitle(translatedTitle);
    });
  }

  /**
   * Unsubscribes from the language change subscription to prevent memory leaks.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
