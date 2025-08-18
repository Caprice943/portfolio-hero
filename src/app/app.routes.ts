import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
    ,
    {
        path: '**',
        redirectTo: 'accueil'
    }
];
