import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-icon-link',
  imports: [],
  templateUrl: './animated-icon-link.html',
  styleUrl: './animated-icon-link.css',
})
export class AnimatedIconLink {
  isHovered = false;
  isLeaving = false;

  @Input() href!: string;
  @Input() label!: string;
  @Input() target!: string;
  @Input() rel?: string;

  onEnter() {
    this.isLeaving = false;
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
    this.isLeaving = true;

    setTimeout(() => {
      this.isLeaving = false;
    }, 900);
  }
}
