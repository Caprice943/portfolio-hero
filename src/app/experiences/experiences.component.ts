import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Experience = {
  period: string;
  title: string;
  company?: string;
  seniority?: string;
  description: string;
  tags: string[];
  link?: string;
};

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})

export class ExperiencesComponent {

  experiences :  Experience [] = [
    {
      period: "2O22 - 2024",
      title: " ",
      company: " ",
      seniority: " ",
      description: " ",
      tags: [ ],
      link: " "
    },
    {
      period: "2021 - 2022 ",
      title: " ",
      company: " ",
      seniority: " ",
      description: " ",
      tags: [ ],
      link: " "
    }, 
  ]

  

}
