import { Component } from '@angular/core';
import { AnimatedIconLink } from '../../shared/components/animated-icon-link/animated-icon-link';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [AnimatedIconLink, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
