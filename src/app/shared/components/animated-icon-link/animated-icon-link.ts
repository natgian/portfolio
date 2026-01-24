import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-icon-link',
  imports: [],
  templateUrl: './animated-icon-link.html',
  styleUrl: './animated-icon-link.css',
})

/**
 * Renders a link with an animated icon that reacts on hover.
 * Receives @Input properties for href, label, target and rel.
 */
export class AnimatedIconLink {
  isHovered = false;
  isLeaving = false;

  @Input() href!: string;
  @Input() label!: string;
  @Input() target!: string;
  @Input() rel?: string;

  /**
   * Activates the hover state when the mouse enters the link.
   */
  onEnter() {
    this.isLeaving = false;
    this.isHovered = true;
  }

  /**
   * Deactivates the hover state when the mouse leaves the link.
   * Resets the "isLeaving" flag after 900ms.
   */
  onLeave() {
    this.isHovered = false;
    this.isLeaving = true;

    setTimeout(() => {
      this.isLeaving = false;
    }, 900);
  }
}
