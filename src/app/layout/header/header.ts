import { Component, inject } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LangToggle } from '../../shared/components/lang-toggle/lang-toggle';
import { DesktopNav } from './desktop-nav/desktop-nav';
import { MobileNav } from './mobile-nav/mobile-nav';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LangToggle, DesktopNav, MobileNav],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly router = inject(Router);
  private translate = inject(TranslateService);
  private sub?: Subscription;
  currentLang: 'de' | 'en' = 'de';
  isProjectPage = false;
  isMenuOpen = false;

  ngOnInit() {
    const lang = this.translate.getCurrentLang();

    if (lang === 'de' || lang === 'en') {
      this.currentLang = lang;
    }

    this.isProjectPage = this.router.url.startsWith('/projects');

    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isProjectPage = event.urlAfterRedirects.startsWith('/projects');
        this.isMenuOpen = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  setLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
