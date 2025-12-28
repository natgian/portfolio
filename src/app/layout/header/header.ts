import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly router = inject(Router);
  private sub?: Subscription;
  isProjectPage = false;
  activeLanguage: 'DE' | 'EN' = 'DE';

  ngOnInit() {
    this.isProjectPage = this.router.url.startsWith('/projects');

    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isProjectPage = event.urlAfterRedirects.startsWith('/projects');
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  setLanguage(lang: 'DE' | 'EN') {
    this.activeLanguage = lang;
  }
}
