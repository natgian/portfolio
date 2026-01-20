import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lang-toggle',
  imports: [],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
})
export class LangToggle {
  @Input() currentLang: 'de' | 'en' = 'de';
  @Output() langChange = new EventEmitter<'de' | 'en'>();

  changeLang(lang: 'de' | 'en') {
    this.langChange.emit(lang);
  }
}
