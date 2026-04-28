import { Component } from '@angular/core';
import { PROJECTS } from '../data/projects.data';


@Component({
    selector: 'app-project',
    imports: [],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = PROJECTS;

}
