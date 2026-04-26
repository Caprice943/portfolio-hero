import { Component } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project',
    imports: [CommonModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = PROJECTS;

}
