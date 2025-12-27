import { Component, inject } from '@angular/core';
import { Header } from '../../../../layout/header/header';
import { StackIcon } from '../../../../shared/components/stack-icon/stack-icon';
import { Button } from '../../../../shared/components/button/button';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  imports: [Header, StackIcon, Button],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private projectService = inject(ProjectService);
  private route = inject(ActivatedRoute);
  private sub?: Subscription;
  project: Project | undefined;
  isDarkBackground = true;

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.project = this.projectService.getProjectById(projectId);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
