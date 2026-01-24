import { Component, inject } from '@angular/core';
import { Header } from '../../../../layout/header/header';
import { StackIcon } from './stack-icon/stack-icon';
import { Button } from '../../../../shared/components/button/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detail',
  imports: [Header, StackIcon, Button, RouterLink, TranslatePipe],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})

/**
 * Component responsible for rendering the project detail page.
 * Uses the data retrieved from the ProjectService based on the route parameter.
 */
export class ProjectDetail {
  /**
   * Service for retrieving projects data.
   */
  private projectService = inject(ProjectService);

  /**
   * Provides access to route parameters to determine the current project ID.
   */
  private route = inject(ActivatedRoute);

  /**
   * Subscription to the route parameters observable, used to track the current project.
   */
  private sub?: Subscription;

  /**
   * Service to set the browser document title for the current project.
   */
  private titleService = inject(Title);

  currentProject: Project | undefined;
  nextProject: Project | undefined;

  /**
   * Indicates if the content is displayed on a dark background.
   */
  isDarkBackground = true;

  /**
   * Initializes the component:
   * - Subscribes to the route parameters to get the project ID
   * - Retrieves the current project from ProjectService
   * - Sets the HTML document title
   * - Determines the next projects
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.currentProject = this.projectService.getProjectById(projectId);

      if (this.currentProject) {
        this.titleService.setTitle(`Project: ${this.currentProject.name}`);
        this.nextProject = this.projectService.getNextProject(projectId);
      } else {
        this.nextProject = undefined;
      }
    });
  }

  /**
   * Cleans up the route parameters subscription to prevent memory leaks.
   */
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
