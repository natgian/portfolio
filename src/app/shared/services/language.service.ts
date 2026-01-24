import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

/**
 * Service to manage the selected language and provide language change notifications
 * to other components.
 */
export class LanguageService {
  /**
   * Injects the TranslateService from ngx-translate.
   */
  private translate = inject(TranslateService);

  /**
   * Currently selected language ('de' or 'en').
   */
  currentLang!: 'de' | 'en';

  /**
   * Constructs the LanguageService and initializes the language settings.
   */
  constructor() {
    this.initLanguage();
  }

  /**
   * Initializes the service.
   * - Registers supported languages and sets the fallback language.
   * - Determines the initial language.
   * - Sets the initial language for TranslateService and the document.
   * - Subscribes to language change events.
   */
  private initLanguage() {
    this.registerLanguages();
    this.currentLang = this.determineInitialLanguage();
    this.applyCurrentLang(this.currentLang);
    this.subscribeToLangChanges();
  }

  /**
   * Registers supported languages and sets the fallback language.
   */
  private registerLanguages() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
  }

  /**
   * Determines the initial language by checking:
   * - the local storage
   * - the browser language
   *
   * @returns - The initially selected language ('de' or 'en')
   */
  private determineInitialLanguage() {
    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();

    if (savedLang === 'de' || savedLang === 'en') {
      return savedLang;
    } else if (browserLang === 'de' || browserLang === 'en') {
      return browserLang;
    } else {
      return 'en';
    }
  }

  /**
   * Applies the current language for translation and updates the document language.
   *
   * @param lang - The newly selected language ('de' or 'en')
   */
  private applyCurrentLang(lang: 'de' | 'en') {
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  /**
   * Subscribes to language change events from TranslateService and updates the current language
   * and document language.
   */
  private subscribeToLangChanges() {
    this.translate.onLangChange.subscribe((event) => {
      if (event.lang === 'de' || event.lang === 'en') {
        this.currentLang = event.lang;
        document.documentElement.lang = event.lang;
      }
    });
  }

  /**
   * Sets the current language and updates TranslateService and localStorage.
   *
   * @param lang - The newly selected language ('de' or 'en')
   */
  public setLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }
}
