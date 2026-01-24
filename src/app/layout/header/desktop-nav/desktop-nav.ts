import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-nav',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './desktop-nav.html',
  styleUrl: './desktop-nav.css',
})

/**
 * Renders the desktop navigation in the header.
 * Receives a flag via @Input to determine if it's on the project page.
 */
export class DesktopNav {
  @Input() isProjectPage: boolean = false;
}
