import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-desktop-nav',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './desktop-nav.html',
  styleUrl: './desktop-nav.css',
})

/**
 * Renders the desktop navigation in the header.
 */
export class DesktopNav {
  @Input() isProjectPage: boolean = false;
  language = inject(LanguageService);
}
