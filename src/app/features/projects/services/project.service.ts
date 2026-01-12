import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  name: string;
  cardImg: string;
  cardDescription: string;
  isFeatured: boolean;
  detailDescription: string;
  implementationText: string[];
  stack: { label: string; icon: string }[];
  detailImg: string;
  githubLink: string;
  liveLink: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 'join',
      name: 'Join',
      cardImg: '/img/projects/join/join_mockup.png',
      cardDescription: 'projects.join.cardDescription',
      isFeatured: true,
      detailDescription: 'projects.join.detailDescription',
      implementationText: ['projects.join.implementation.0', 'projects.join.implementation.1'],
      stack: [
        { label: 'HTML', icon: '/img/icons/html.svg' },
        { label: 'CSS', icon: '/img/icons/css.svg ' },
        { label: 'JavaScript', icon: '/img/icons/javascript.svg ' },
        { label: 'Firebase', icon: '/img/icons/firebase.svg ' },
      ],
      detailImg: '/img/projects/join/join_mockup_devices.png',
      githubLink: 'https://github.com/natgian/kanban-vanillajs-group-project',
      liveLink: 'https://join.natgian.com/',
    },
    {
      id: 'nara',
      name: 'Nara - Guardian of the Greenwood',
      cardImg: '/img/projects/nara/nara_mockup.jpg',
      cardDescription: 'projects.nara.cardDescription',
      isFeatured: false,
      detailDescription: 'projects.nara.detailDescription',
      implementationText: [
        'projects.nara.implementation.0',
        'projects.nara.implementation.1',
        'projects.nara.implementation.2',
      ],
      stack: [
        { label: 'HTML', icon: '/img/icons/html.svg' },
        { label: 'CSS', icon: '/img/icons/css.svg ' },
        { label: 'JavaScript', icon: '/img/icons/javascript.svg ' },
      ],
      detailImg: '/img/projects/nara/nara_mockup_devices.png',
      githubLink: 'https://github.com/natgian/2dgame-js',
      liveLink: 'https://nara-game.natgian.com/',
    },
    {
      id: 'leseoase',
      name: 'LeseOase',
      cardImg: '/img/projects/leseoase/leseoase_mockup.jpg',
      cardDescription: 'projects.leseoase.cardDescription',
      isFeatured: false,
      detailDescription: 'projects.leseoase.detailDescription',
      implementationText: [
        'projects.leseoase.implementation.0',
        'projects.leseoase.implementation.1',
        'projects.leseoase.implementation.2',
      ],
      stack: [
        { label: 'HTML', icon: '/img/icons/html.svg' },
        { label: 'CSS', icon: '/img/icons/css.svg ' },
        { label: 'JavaScript', icon: '/img/icons/javascript.svg ' },
        { label: 'React', icon: '/img/icons/react.svg ' },
        { label: 'Node.js', icon: '/img/icons/nodejs.svg ' },
        { label: 'MongoDB', icon: '/img/icons/mongodb.svg ' },
      ],
      detailImg: '/img/projects/leseoase/leseoase_mockup_devices.png',
      githubLink: 'https://github.com/natgian/books-tracking-app',
      liveLink: 'https://www.leseoase.app/',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  getProjectIndex(id: string): number {
    const projects = this.getProjects();
    return projects.findIndex((project) => project.id === id);
  }

  getNextProject(id: string): Project | undefined {
    const currentIndex = this.getProjectIndex(id);
    if (currentIndex === -1) return undefined;
    return this.projects[(currentIndex + 1) % this.projects.length];
  }
}
