import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lang-toggle',
  imports: [],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
})

/**
 * Renders the language toggle component for selecting a language ('de' or 'en').
 * Receives the current language via @Input and emits an event when a new language
 * is selected.
 */
export class LangToggle {
  @Input() currentLang: 'de' | 'en' = 'de';
  @Output() langChange = new EventEmitter<'de' | 'en'>();

  /**
   * Emits the newly selected language.
   *
   * @param lang - The selected language ('de' or 'en')
   */
  changeLang(lang: 'de' | 'en') {
    this.langChange.emit(lang);
  }
}
