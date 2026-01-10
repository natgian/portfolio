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
      detailDescription:
        'JOIN is a web application developed as part of a Scrum-based group project to gain practical experience in agile teamwork and project management. It is a task manager inspired by the Kanban System that features tasks, subtasks, user assignment and due dates.',
      implementationText: [
        'My main responsibilities included implementing the Kanban board feature, building the core UI structure with page navigation, and developing the login and sign-up client-side validation and user feedback.',
        'We organized our workflow through clear task distribution and regular coordination. This allowed me to work independently on assigned features while ensuring seamless integration into the overall application concept.',
      ],
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
      detailDescription:
        'This game was created to practice OOP (object oriented programming). The goal was to provide a fun and interactive experience directly in the browser, without any external frameworks.',
      implementationText: [
        'For this project, I structured and implemented the game’s core mechanics, including character movement, jumping, collision detection with enemies and collectibles, and a crafting system for creating new arrows. I added dynamic multi-layered backgrounds, integrated sound effects and background music with mute functionality, and added restart and menu navigation features.',
        'The project allowed me to strengthen my skills in object-oriented programming, interactive UI design and game logic implementation.',
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
      detailDescription:
        'A user-friendly Book Tracking App designed for book enthusiasts to manage and organize their reading journey.',
      implementationText: [
        'During this project, I independently planned and developed a full-stack web application for searching books, managing reading lists, and tracking reading progress. I designed the user flow and UI structure, implemented core features using React, Node.js, Express, and MongoDB, and integrated the Google Books API. I also built secure account features such as password reset and form validation, and ensured responsive behavior across devices.',
        'The project strengthened my skills in full-stack development, API integration, and creating user-focused applications from concept to deployment.',
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
