import { Injectable } from '@angular/core';

/**
 * Represents a project with all its data.
 */
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

/**
 * Service to provide the projects data to other components.
 */
export class ProjectService {
  /**
   * Array containing all projects data and keys for translations.
   */
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
      name: 'Nara',
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

  /**
   * Retrieves all projects.
   *
   * @returns - An array of Project objects
   */
  getProjects(): Project[] {
    return this.projects;
  }

  /**
   * Retrieves a single project by its ID.
   *
   * @param id - The ID of the project to retrieve
   * @returns - The Project object matching the ID or 'undefined' if not found
   */
  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  /**
   * Retrieves the index of a project.
   *
   * @param id - The ID of the project
   * @returns - The index of the project in the projects array or -1 if not found
   */
  getProjectIndex(id: string): number {
    const projects = this.getProjects();
    return projects.findIndex((project) => project.id === id);
  }

  /**
   * Determines the next project.
   * Loops back to the start if the last project is reached.
   *
   * @param id - The ID of the current project
   * @returns - The next Project object or 'undefined' if the current ID is not found
   */
  getNextProject(id: string): Project | undefined {
    const currentIndex = this.getProjectIndex(id);
    if (currentIndex === -1) return undefined;
    return this.projects[(currentIndex + 1) % this.projects.length];
  }
}
