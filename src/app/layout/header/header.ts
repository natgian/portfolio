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

/**
 * Component responsible for rendering the header and handling navigation state.
 */
export class Header {
  isMenuOpen = false;

  /**
   * Flag to determine if the user is currently on the project page.
   * Used to adjust the navigation styles in DesktopNav and MobileNav.
   */
  isProjectPage = false;

  /**
   * Injects the Router to observe navigation changes.
   */
  readonly router = inject(Router);

  /**
   * Injects the LanguageService for translations.
   */
  language = inject(LanguageService);

  /**
   * Subscription to the router events observable, used to track navigation changes.
   */
  private sub?: Subscription;

  /**
   * Gets the currently selected language from the LanguageService.
   */
  get currentLang() {
    return this.language.currentLang;
  }

  /**
   * Checks on initialization if the current route contains "/projects".
   * Used to set the "isProjectPage" flag.
   */
  ngOnInit() {
    this.isProjectPage = this.router.url.startsWith('/projects');

    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isProjectPage = event.urlAfterRedirects.startsWith('/projects');
        this.closeMenu();
      }
    });
  }

  /**
   * Cleans up the router events subscription to prevent memory leaks.
   */
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  /**
   * Toggles the mobile menu.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Closes the mobile menu.
   */
  closeMenu() {
    this.isMenuOpen = false;
  }
}
