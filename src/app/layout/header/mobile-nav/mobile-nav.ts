import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LangToggle } from '../../../shared/components/lang-toggle/lang-toggle';
import { SocialLinks } from '../../../shared/components/social-links/social-links';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink, TranslatePipe, LangToggle, SocialLinks],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
})

/**
 * Renders the mobile navigation in the header.
 * Receives @Input flags to determine if it's displayed on the project page and which
 * language is currently selected.
 * Emits an event when the language is changed.
 */
export class MobileNav {
  @Input() isProjectPage: boolean = false;
  @Input() currentLang: 'de' | 'en' = 'de';
  @Output() langChange = new EventEmitter<'de' | 'en'>();

  /**
   * Emits an event when a new language is selected.
   *
   * @param lang - The newly selected language
   */
  onLangChange(lang: 'de' | 'en') {
    this.langChange.emit(lang);
  }
}
