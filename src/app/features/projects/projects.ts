import { Component, inject, NgZone } from '@angular/core';
import { SectionIntro } from '../../shared/components/section-intro/section-intro';
import { ProjectCard } from './components/project-card/project-card';
import { ProjectService } from './services/project.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [SectionIntro, ProjectCard, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  projects = this.projectService.getProjects();
  singleProject = this.projectService.getProjectById('join');
  isDarkBackground = false;
  isDesktopLayout = true;

  projectsIntro = {
    intro: 'home.projects.intro',
    title: 'home.projects.title',
    text: ['home.projects.description'],
    imgSrc: '/img/ui-elements/underline_4.png',
    cta: 'home.projects.cta',
  };

  ngOnInit() {
    this.isDesktopLayout = window.matchMedia('(hover: hover)').matches;
    this.isDarkBackground = this.isDesktopLayout;
  }
}
