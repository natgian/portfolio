import { Component } from '@angular/core';
import { AnimatedIconLink } from '../../shared/components/animated-icon-link/animated-icon-link';

@Component({
  selector: 'app-footer',
  imports: [AnimatedIconLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  isDarkBackground = true;
}
