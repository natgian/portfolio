import { Component, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('tracker') tracker!: ElementRef;
  isDarkBackground = true;
  mouseX = 0;
  mouseY = 0;
  mouseTrackerVisible = false;
  isUpdatingFrame = false;
  supportsHover = true;
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

  /**
   * Sets the mouseTrackVisible flag when the mouse enters the element.
   */
  onMouseEnter() {
    this.mouseTrackerVisible = true;
  }

  /**
   * Sets the mouseTrackVisible flag when the mouse leaves the element.
   */
  onMouseLeave() {
    this.mouseTrackerVisible = false;
  }

  /**
   * Update the tracker position when the mouse is moved.
   * Uses requestAnimationFrame to prevent lag by ensuring the tracker only updates once per
   * animation frame.
   *
   * @param event - The mouse event
   */
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (!this.isUpdatingFrame) {
      this.isUpdatingFrame = true;
      requestAnimationFrame(() => {
        this.updateTracker();
        this.isUpdatingFrame = false;
      });
    }
  }

  /**
   * Updates the tracker’s position and hover state.
   */
  updateTracker() {
    if (!this.tracker) return;

    const trackerElement = this.tracker.nativeElement;
    const trackerWidth = trackerElement.offsetWidth;
    const trackerHeight = trackerElement.offsetHeight;

    this.setTrackerPosition(trackerElement, trackerWidth, trackerHeight);
    this.applyTrackerHoverState(trackerElement);
  }

  /**
   * Sets the tracker element position based on the current mouse coordinates.
   *
   * @param trackerElement - The tracker HTML element
   * @param trackerWidth - The width of the tracker element
   * @param trackerHeight - The height of the tracker element
   */
  private setTrackerPosition(
    trackerElement: HTMLElement,
    trackerWidth: number,
    trackerHeight: number,
  ) {
    trackerElement.style.transform = `translate(${this.mouseX - trackerWidth / 2}px, ${this.mouseY - trackerHeight / 2}px)`;
  }

  /**
   * Checks if the cursor is currently hovering over a specific interactive element
   * (.hello-text, .letter, .polaroid, .btn, or li).
   *
   * @returns - "True" if the cursor is over one of these elements, otherwise "false"
   */
  private isCursorOverInteractiveElement(): boolean {
    const elementUnderCursor = document.elementFromPoint(this.mouseX, this.mouseY) as HTMLElement;
    if (elementUnderCursor?.closest('.hello-text, .letter, .polaroid, .btn, li')) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Updates the tracker’s hover style depending on if it is over an interactive element.
   *
   * @param trackerElement - The tracker HTML element
   */
  private applyTrackerHoverState(trackerElement: HTMLElement) {
    if (this.isCursorOverInteractiveElement()) {
      trackerElement.classList.add('tracker-hovered');
    } else {
      trackerElement.classList.remove('tracker-hovered');
    }
  }
}
