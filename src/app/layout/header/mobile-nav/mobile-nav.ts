import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LangToggle } from '../../../shared/components/lang-toggle/lang-toggle';
import { SocialLinks } from '../../../shared/components/social-links/social-links';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink, TranslatePipe, LangToggle, SocialLinks],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
})

/**
 * Renders the mobile navigation in the header.
 * Receives @Input flags to determine if it's displayed on the project page.
 * Emits an event when a link is clicked.
 */
export class MobileNav {
  @Input() isProjectPage: boolean = false;
  @Output() linkClick = new EventEmitter<void>();
  language = inject(LanguageService);
}
