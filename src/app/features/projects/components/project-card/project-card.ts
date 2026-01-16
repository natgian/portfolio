import { Component, Input } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-project-card',
  imports: [Button],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() id!: string;
  @Input() name!: string;
  @Input() cardImg!: string;
  @Input() cardDescription!: string;
  @Input() cta!: string;
  @Input() isFeatured!: boolean;
  @Input() isDesktopLayout!: boolean;
  isDarkBackground = false;

  ngOnInit() {
    this.isDarkBackground = this.isDesktopLayout ? true : false;
  }
}
