import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkillIcon } from '../../shared/components/skill-icon/skill-icon';
import { TranslatePipe } from '@ngx-translate/core';

/**
 *  * Represents a skill in the "skills" section.
 */
interface Skill {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-skills',
  imports: [SkillIcon, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})

/**
 * Component responsible for rendering the "skills" section on the main page.
 * It implements AfterViewInit to use the intersection observer.
 */
export class Skills implements AfterViewInit {
  /**
   * Reference to the skill title element in the template.
   */
  @ViewChild('skillTextContainer')
  skillTitle!: ElementRef<HTMLElement>;

  /**
   * Indicates if the circular UI element is currently visible.
   */
  isCircleVisible = false;

  /**
   * Current frame index of the peeling animation.
   */
  currentPeelFrame = 1;

  /**
   * Indicates if the peeling animation is currently running.
   */
  isPeeling = false;

  /**
   * List of skills displayed in the "skills" section.
   */
  skills: Skill[] = [
    { icon: 'img/icons/html.svg', label: 'HTML' },
    { icon: 'img/icons/css.svg', label: 'CSS' },
    { icon: 'img/icons/javascript.svg', label: 'JavaScript' },
    { icon: 'img/icons/typescript.svg', label: 'TypeScript' },
    { icon: 'img/icons/angular.svg', label: 'Angular' },
    { icon: 'img/icons/react.svg', label: 'React' },
    { icon: 'img/icons/nodejs.svg', label: 'Node.js' },
    { icon: 'img/icons/express.svg', label: 'Express.js' },
    { icon: 'img/icons/mongodb.svg', label: 'MongoDB' },
    { icon: 'img/icons/firebase.svg', label: 'Firebase' },
    { icon: 'img/icons/git.svg', label: 'Git' },
    { icon: 'img/icons/rest-api.svg', label: 'REST-API' },
    { icon: 'img/icons/scrum.svg', label: 'Scrum' },
    { icon: 'img/icons/heroku.svg', label: 'Heroku' },
    { icon: 'img/icons/photoshop.svg', label: 'Photoshop' },
  ];

  /**
   * Observes if the viewport is intersecting with the skill title element.
   * If it is, the circle around the skill title is displayed.
   */
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isCircleVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );

    observer.observe(this.skillTitle.nativeElement);
  }

  /**
   * Triggers the peeling animation by adding frames.
   * Prevents repeating it while the animation is still running.
   *
   */
  onPeel() {
    if (this.currentPeelFrame >= 3 || this.isPeeling) return;

    this.isPeeling = true;
    this.currentPeelFrame++;

    setTimeout(() => {
      this.currentPeelFrame++;
      this.isPeeling = false;
    }, 100);
  }
}
