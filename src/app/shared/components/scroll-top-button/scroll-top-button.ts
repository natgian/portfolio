import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  imports: [],
  templateUrl: './scroll-top-button.html',
  styleUrl: './scroll-top-button.css',
})

/**
 * Renders a scroll to top button.
 * The button appears after scrolling past a threshold and dynamically adjusts its bottom
 * offset to avoid overlapping the footer.
 */
export class ScrollTopButton {
  /** Reference to the scroll button element in the template for focus control */
  @ViewChild('scrollButton')
  buttonRef!: ElementRef<HTMLButtonElement>;

  /**
   *  Shows if the button is currently visible
   */
  isVisible: boolean = false;

  /**
   * Distance from the bottom of the viewport in pixels, is adjusted to avoid overlapping the footer.
   */
  bottomOffset: number = 32;

  /**
   * Handles window scroll events.
   * Updates button visibility based on scroll position.
   * Adjusts bottom offset dynamically to prevent overlapping the footer.
   * Removes focus from the button when it is hidden to avoid accessibility issues.
   *
   * @param event - The scroll event (not used but required for @HostListener)
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const previouslyVisible = this.isVisible;
    const currentlyVisible = this.checkVisibility();

    this.bottomOffset = this.calculateBottomOffset();
    this.removeFocusIfHidden(previouslyVisible, currentlyVisible);

    this.isVisible = currentlyVisible;
  }

  /**
   * Checks if the scroll threshold for showing the button has been reached.
   *
   * @returns - "True" if the threshold is hit, otherwise "false"
   */
  private checkVisibility(): boolean {
    return window.scrollY >= 800;
  }

  /**
   * Calculates the distance from the bottom of the viewport for the button.
   * Makes sure the button does not overlap the footer.
   *
   * @returns - The bottom offset in pixels
   */
  private calculateBottomOffset(): number {
    const defaultBottomOffset = 32;
    const footerBottomOffset = 230;
    const distanceFromBottom =
      document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

    return distanceFromBottom < footerBottomOffset ? footerBottomOffset : defaultBottomOffset;
  }

  /**
   * Removes the focus from the button if it's hidden.
   *
   * @param previouslyVisible - "True" if the button was previously visible, otherwise "false"
   * @param currentlyVisible - "True" if the button is currently visible, otherwise "false"
   */
  private removeFocusIfHidden(previouslyVisible: boolean, currentlyVisible: boolean) {
    if (previouslyVisible && !currentlyVisible && this.buttonRef) {
      this.buttonRef.nativeElement.blur();
    }
  }

  /**
   * Scrolls the page to the top smoothly.
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
