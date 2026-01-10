import { Component, inject } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly router = inject(Router);
  private translate = inject(TranslateService);
  private sub?: Subscription;
  isProjectPage = false;

  ngOnInit() {
    this.isProjectPage = this.router.url.startsWith('/projects');

    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isProjectPage = event.urlAfterRedirects.startsWith('/projects');
      }
    });
  }

  get currentLang() {
    return this.translate.getCurrentLang();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  setLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
