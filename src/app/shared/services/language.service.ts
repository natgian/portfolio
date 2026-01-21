import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  currentLang!: 'de' | 'en';

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    this.registerLanguages();
    this.determinalInitialLanguage();
    this.subscribeToLangChanges();
  }

  private registerLanguages() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
  }

  private determinalInitialLanguage() {
    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();

    if (savedLang === 'de' || savedLang === 'en') {
      this.currentLang = savedLang;
    } else if (browserLang === 'de' || browserLang === 'en') {
      this.currentLang = browserLang;
    } else {
      this.currentLang = 'en';
    }

    this.translate.use(this.currentLang);
    document.documentElement.lang = this.currentLang;
  }

  private subscribeToLangChanges() {
    this.translate.onLangChange.subscribe((event) => {
      if (event.lang === 'de' || event.lang === 'en') {
        this.currentLang = event.lang;
        document.documentElement.lang = event.lang;
      }
    });
  }

  public setLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }
}
