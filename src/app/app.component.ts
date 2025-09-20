import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { Component } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BlobsBackgroundComponent } from './blobs-background/blobs-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ContactComponent, ProfileComponent, ProjectComponent, ExperiencesComponent, BlobsBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-hero';
}
