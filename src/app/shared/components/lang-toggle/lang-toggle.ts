import { Component, Input, inject, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-lang-toggle',
  imports: [],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
})

/**
 * Renders the language toggle component for selecting a language ('de' or 'en').
 * Interacts directly with the languageService to get and set the active language.
 */
export class LangToggle {
  /**
   * Flag to determine if the component is displayed on a project page.
   */
  @Input() isProjectPage: boolean = false;

  language = inject(LanguageService);

  /**
   * Updates the selected language directly in the LanguageService.
   *
   * @param lang - The selected language ('de' or 'en')
   */
  changeLang(lang: 'de' | 'en'): void {
    this.language.setLang(lang);
  }
}
