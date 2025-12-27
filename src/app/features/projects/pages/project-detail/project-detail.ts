import { Component, inject } from '@angular/core';
import { Header } from '../../../../layout/header/header';
import { StackIcon } from '../../../../shared/components/stack-icon/stack-icon';
import { Button } from '../../../../shared/components/button/button';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  imports: [Header, StackIcon, Button],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private projectService = inject(ProjectService);
  private route = inject(ActivatedRoute);
  project: Project | undefined;
  isDarkBackground = true;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.project = this.projectService.getProjectById(projectId);
    });
  }
}

// projects = [
//   {
//     name: 'Join',
//     description:
//       'JOIN is a web application developed as part of a Scrum-based group project to gain practical experience in agile teamwork and project management. It is a task manager inspired by the Kanban System that features tasks, subtasks, user assignment and due dates.',
//     details: [
//       'My main responsibilities included implementing the Kanban board feature, building the core UI structure with page navigation, and developing the login and sign-up client-side validation and user feedback.',
//       'We organized our workflow through clear task distribution and regular coordination. This allowed me to work independently on assigned features while ensuring seamless integration into the overall application concept.',
//     ],
//     stack: [
//       { label: 'HTML', icon: '/img/icons/html.svg' },
//       { label: 'CSS', icon: '/img/icons/css.svg ' },
//       { label: 'JavaScript', icon: '/img/icons/javascript.svg ' },
//       { label: 'Firebase', icon: '/img/icons/firebase.svg ' },
//     ],
//     img: '/img/projects/join/join_mockup_2.png',
//     githubLink: 'https://github.com/natgian/kanban-vanillajs-group-project',
//     liveLink: 'https://join.natgian.com/',
//   },
// ];
