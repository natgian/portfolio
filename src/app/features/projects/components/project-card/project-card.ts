import { Component, Input } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-project-card',
  imports: [Button],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() title!: string;
  @Input() imgSrc!: string;
  @Input() description!: string;
  @Input() isFeatured!: boolean;
  isDarkBackground = true;
}
