import { Component, inject } from '@angular/core';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';
import { ProjectCard } from './components/project-card/project-card';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-projects',
  imports: [SectionIntro, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  projects = this.projectService.getProjects();
  singleProject = this.projectService.getProjectById('join');
  isDarkBackground = false;

  aboutIntro = {
    intro: 'MY CRAFT',
    title: 'Projects',
    text: [
      `Explore my projects to see how I turn ideas into responsive, user-friendly web applications, built with clean architecture and efficient code, designed to solve real-world problems.`,
    ],
    imgSrc: '/img/ui-elements/underline_4.png',
  };
}
