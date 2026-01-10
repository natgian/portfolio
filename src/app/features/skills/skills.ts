import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkillIcon } from '../../shared/components/skill-icon/skill-icon';
import { timeout } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [SkillIcon, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements AfterViewInit {
  @ViewChild('skillTextContainer')
  skillTitle!: ElementRef;
  isCircleVisible = false;
  currentPeelFrame = 1;
  isPeeling = false;

  skills = [
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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isCircleVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    observer.observe(this.skillTitle.nativeElement);
  }

  onPeel() {
    if (this.currentPeelFrame >= 3 || this.isPeeling) return;

    this.isPeeling = true;
    this.currentPeelFrame++;

    setTimeout(() => {
      this.currentPeelFrame++;
      this.isPeeling = false;
    }, 50);
  }
}
