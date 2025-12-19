import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  activeLanguage: 'DE' | 'EN' = 'DE';

  setLanguage(lang: 'DE' | 'EN') {
    this.activeLanguage = lang;
  }
}
