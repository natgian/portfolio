import { Injectable } from '@angular/core';

interface Project {
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
      cardDescription:
        'Task manager inspired by the Kanban System. Features tasks, subtasks, user assignment and due dates. Developed with Vanilla JavaScript and Firebase in a Scrum-based group project to practice agile teamwork and project management.',
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
      detailImg: '/img/projects/join/join_mockup_2.png',
      githubLink: 'https://github.com/natgian/kanban-vanillajs-group-project',
      liveLink: 'https://join.natgian.com/',
    },
    {
      id: 'nara',
      name: 'Nara - Guardian of the Greenwood',
      cardImg: '/img/projects/nara/nara_mockup.jpg',
      cardDescription:
        'Browser-based game built with Vanilla JavaScript to practice object-oriented programming (OOP). Protect the Greenwood with your bow and courage from the creeping darkness rising.',
      isFeatured: false,
      detailDescription: '',
      implementationText: [''],
      stack: [
        { label: 'HTML', icon: '/img/icons/html.svg' },
        { label: 'CSS', icon: '/img/icons/css.svg ' },
        { label: 'JavaScript', icon: '/img/icons/javascript.svg ' },
      ],
      detailImg: '/img/projects/join/join_mockup_2.png',
      githubLink: 'https://github.com/natgian/2dgame-js',
      liveLink: 'https://nara-game.natgian.com/',
    },
    {
      id: 'leseoase',
      name: 'LeseOase',
      cardImg: '/img/projects/leseoase/leseoase_mockup.jpg',
      cardDescription:
        'A full-stack web app for book enthusiasts to manage and organize their reading journey. Built with React, Node.js, Express.js and MongoDB.',
      isFeatured: false,
      detailDescription: '',
      implementationText: [''],
      stack: [
        { label: 'HTML', icon: '/img/icons/html.svg' },
        { label: 'CSS', icon: '/img/icons/css.svg ' },
        { label: 'JavaScript', icon: '/img/icons/javascript.svg ' },
        { label: 'React', icon: '/img/icons/react.svg ' },
        { label: 'Node.js', icon: '/img/icons/node.svg ' },
        { label: 'MongoDB', icon: '/img/icons/mongodb.svg ' },
      ],
      detailImg: '/img/projects/join/join_mockup_2.png',
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
}
