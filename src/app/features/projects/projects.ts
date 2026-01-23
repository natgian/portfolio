import { Component, inject } from '@angular/core';
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

/**
 * Component responsible for rendering the "projects" section on the main page.
 * Includes the section intro and project cards.
 */
export class Projects {
  /**
   * Service for retrieving projects data.
   */
  private projectService = inject(ProjectService);

  /**
   * Array of projects retrieved from the ProjectService.
   */
  projects = this.projectService.getProjects();

  /**
   * Indicates if the section is displayed on a dark background.
   */
  isDarkBackground = false;

  /**
   * Indicates if the section is a desktop layout.
   * This is set on component initialization (in ngOnInit).
   */
  isDesktopLayout = true;

  /**
   * Configuration object for the projects section intro.
   * Contains translation keys and assets that are used by the SectionIntro component.
   */
  projectsIntro = {
    intro: 'home.projects.intro',
    title: 'home.projects.title',
    text: ['home.projects.description'],
    imgSrc: '/img/ui-elements/underline_4.png',
    cta: 'home.projects.cta',
  };

  /**
   * Initializes the component layout based on the device's hover capability.
   * Sets 'isDesktopLayout' if the device supports hover and updates 'isDarkBackground' accordingly.
   */
  ngOnInit() {
    this.isDesktopLayout = window.matchMedia('(hover: hover)').matches;
    this.isDarkBackground = this.isDesktopLayout;
  }
}
