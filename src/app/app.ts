import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private translate = inject(TranslateService);
  supportedLangs = ['en', 'de'];

  constructor() {
    this.translate.addLangs(this.supportedLangs);
    this.translate.setFallbackLang('en');

    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();
    const lang: string =
      savedLang || (browserLang && this.supportedLangs.includes(browserLang) ? browserLang : 'en');

    this.translate.use(lang);
  }
}
