import { Component } from '@angular/core';
import { AnimatedIconLink } from '../../shared/components/animated-icon-link/animated-icon-link';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [AnimatedIconLink, RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
