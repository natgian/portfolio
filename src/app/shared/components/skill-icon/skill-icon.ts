import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  imports: [],
  templateUrl: './skill-icon.html',
  styleUrl: './skill-icon.css',
})
export class SkillIcon {
  @Input() icon!: string;
  @Input() label!: string;
}
