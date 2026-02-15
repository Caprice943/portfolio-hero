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
