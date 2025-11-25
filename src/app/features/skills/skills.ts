import { Component } from '@angular/core';
import { SkillIcon } from '../../shared/components/skill-icon/skill-icon';

@Component({
  selector: 'app-skills',
  imports: [SkillIcon],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
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
}
