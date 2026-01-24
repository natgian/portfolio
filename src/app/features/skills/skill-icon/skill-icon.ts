import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  imports: [],
  templateUrl: './skill-icon.html',
  styleUrl: './skill-icon.css',
})

/**
 * Renders a skill icon with a label.
 * Receives @Input properties for the icon image URL and the skill label.
 */
export class SkillIcon {
  @Input() icon!: string;
  @Input() label!: string;
}
