import { Component } from '@angular/core';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';
import { ProjectCard } from './project-card/project-card';
import { FetchBackend } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  imports: [SectionIntro, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  isDarkBackground = false;

  aboutIntro = {
    intro: 'MY CRAFT',
    title: 'Projects',
    text: `Explore my projects built with a focus on clean architecture, efficient code, and responsive design. Each one reflects my approach to developing reliable, scalable, and user-friendly applications.`,
    imgSrc: '/img/ui-elements/underline_4.png',
  };

  projects = [
    {
      title: 'Join',
      imgSrc: '/img/projects/join/join_mockup.png',
      description:
        'Task manager inspired by the Kanban System. Features tasks, subtasks, user assignment and due dates. Developed with Vanilla JavaScript and Firebase in a Scrum-based group project to practice agile teamwork and project management.',
      isFeatured: true,
    },
    {
      title: 'Nara - Guardian of the Greenwood',
      imgSrc: '/img/projects/nara/nara_mockup.jpg',
      description:
        'Browser-based game built with Vanilla JavaScript to practice object-oriented programming (OOP). Protect the Greenwood with your bow and courage from the creeping darkness rising.',
      isFeatured: false,
    },
    {
      title: 'LeseOase',
      imgSrc: '/img/projects/leseoase/leseoase_mockup.jpg',
      description:
        'A full-stack web app for book enthusiasts to manage and organize their reading journey. Built with React, Node.js, Express.js and MongoDB.',
      isFeatured: false,
    },
  ];
}
