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
export class MobileNav {
  @Input() isProjectPage: boolean = false;
  @Input() currentLang: 'de' | 'en' = 'de';
  @Output() langChange = new EventEmitter<'de' | 'en'>();

  onLangChange(lang: 'de' | 'en') {
    this.langChange.emit(lang);
  }
}
