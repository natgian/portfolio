import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  activeLanguage: 'DE' | 'EN' = 'DE';

  setLanguage(lang: 'DE' | 'EN') {
    this.activeLanguage = lang;
    console.log(this.activeLanguage);
  }
}
