import { Component, inject } from '@angular/core';
import { Header } from '../../../../layout/header/header';
import { StackIcon } from '../../../../shared/components/stack-icon/stack-icon';
import { Button } from '../../../../shared/components/button/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  imports: [Header, StackIcon, Button, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private projectService = inject(ProjectService);
  private route = inject(ActivatedRoute);
  private sub?: Subscription;
  private titleService = inject(Title);
  currentProject: Project | undefined;
  nextProject: Project | undefined;
  isDarkBackground = true;

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

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
