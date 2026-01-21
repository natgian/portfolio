import { Component, inject } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { LangToggle } from '../../shared/components/lang-toggle/lang-toggle';
import { DesktopNav } from './desktop-nav/desktop-nav';
import { MobileNav } from './mobile-nav/mobile-nav';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LangToggle, DesktopNav, MobileNav],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly router = inject(Router);
  public language = inject(LanguageService);
  private sub?: Subscription;
  isProjectPage = false;
  isMenuOpen = false;

  get currentLang() {
    return this.language.currentLang;
  }

  ngOnInit() {
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

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
