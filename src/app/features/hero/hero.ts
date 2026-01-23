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

/**
 * Component responsible for rendering the "hero" section on the main page,
 * including greeting text, animated title letters, and a polaroid smile effect.
 */
export class Hero {
  polaroidSmile = ':)';
  helloHovered = false;
  helloLeaving = false;

  /**
   * The translation key for the greeting text.
   */
  helloText = 'home.hero.greeting';

  /**
   * The translation key for the greeting text when hovered.
   */
  helloHoveredText = 'home.hero.intro';

  /**
   * Indicates if the section is displayed on a dark background.
   */
  isDarkBackground = true;

  /**
   * Indicates if the device supports hover effects (set in ngOnInit).
   */
  supportsHover = true;

  /**
   * Stores the individual letters of the first word for animation purposes.
   */
  titleFirstWord = Array.from('Fullstack');

  /**
   * Stores the individual letters of the second word for animation purposes.
   */
  titleSecondWord = Array.from('DEVELOPER');

  /**
   * Stores the current animated state of the first word letters.
   */
  titleFirstWordCurrent = [...this.titleFirstWord];

  /**
   * Stores the current animated state of the second word letters.
   */
  titleSecondWordCurrent = [...this.titleSecondWord];

  /**
   * Checks if the device supports hover effects on initialization.
   */
  ngOnInit() {
    this.supportsHover = window.matchMedia('(hover: hover)').matches;
  }

  /**
   * Changes the selected letter to upper- or lowercase depending on its current state.
   *
   * @param currentArray - Array of letters currently displayed
   * @param index - Index of the letter to toggle
   */
  toggleLetterCase(currentArray: string[], index: number) {
    const letter = currentArray[index];
    const changedLetter =
      letter === letter.toLocaleUpperCase()
        ? letter.toLocaleLowerCase()
        : letter.toLocaleUpperCase();
    currentArray[index] = changedLetter;
  }

  /**
   * Resets the letter to its original state.
   *
   * @param currentArray - Array of letters currently displayed
   * @param index - Index of the letter to reset
   * @param originalArray - The original array of letters to restore
   */
  resetLetterCase(currentArray: string[], index: number, originalArray: string[]) {
    currentArray[index] = originalArray[index];
  }

  /**
   *  * Updates the currently displayed polaroid smile.
   *
   * @param smile - The smile string to display
   */
  toggleSmile(smile: string) {
    this.polaroidSmile = smile;
  }

  /**
   * Sets the greeting text as hovered and cancels the leaving state.
   * These flags are used for the greeting text animation.
   */
  startHover() {
    this.helloLeaving = false;
    this.helloHovered = true;
  }

  /**
   * Sets the greeting text as leaving and clears the hover state.
   * The leaving state is reset after 900ms.
   * These flags are used for the greeting text animation.
   */
  startLeave() {
    this.helloHovered = false;
    this.helloLeaving = true;

    setTimeout(() => {
      this.helloLeaving = false;
    }, 900);
  }
}
