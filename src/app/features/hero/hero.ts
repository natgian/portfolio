import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-hero',
  imports: [Button, SocialLinks, RouterLink, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  helloHovered = false;
  helloLeaving = false;
  helloText = 'home.hero.greeting';
  helloHoveredText = 'home.hero.intro';
  polaroidSmile = ':)';
  isDarkBackground = true;
  supportsHover = true;

  titleFirstWord = Array.from('Fullstack');
  titleSecondWord = Array.from('DEVELOPER');
  titleFirstWordCurrent = [...this.titleFirstWord];
  titleSecondWordCurrent = [...this.titleSecondWord];

  ngOnInit() {
    this.supportsHover = window.matchMedia('(hover: hover)').matches;
  }

  toggleLetterCase(currentArray: string[], index: number) {
    const letter = currentArray[index];
    const changedLetter =
      letter === letter.toLocaleUpperCase()
        ? letter.toLocaleLowerCase()
        : letter.toLocaleUpperCase();
    currentArray[index] = changedLetter;
  }

  resetLetterCase(currentArray: string[], index: number, originalArray: string[]) {
    currentArray[index] = originalArray[index];
  }

  toggleSmile(smile: string) {
    this.polaroidSmile = smile;
  }

  startHover() {
    this.helloLeaving = false;
    this.helloHovered = true;
  }

  startLeave() {
    this.helloHovered = false;
    this.helloLeaving = true;

    setTimeout(() => {
      this.helloLeaving = false;
    }, 900);
  }
}
