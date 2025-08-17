import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    }
    ,{
        path: 'accueil',
        component: ProfileComponent
    },
    {
        path: 'experiences',
        component: ExperiencesComponent
    },
    {
        path: 'projets',
        component: ProjectComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: 'accueil'
    }
];
