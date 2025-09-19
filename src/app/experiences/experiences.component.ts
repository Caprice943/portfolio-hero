import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SplitSentencesPipe } from '../split-sentences.pipe';

type Experience = {
  period: string;
  title: string;
  company?: string;
  description: string;
  tags: string[];
  link?: string;
};

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, SplitSentencesPipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})

export class ExperiencesComponent {

  experiences :  Experience [] = [
    {
      period: " Novembre 2022 - Octobre 2024 ",
      title: " Développeuse Fullstack Junior Java/Angular ",
      company: " DSI Branche Service-Courrier-Colis de la Poste Groupe ",
      description: " Pilotage du développement de nouvelles fonctionnalités sur un projet interne stratégique, en méthode Agile SCRUM. Rédaction et automatisation de tests unitaires (JUnit, Jasmine) pour garantir la qualité et la fiabilité du code. Conception et documentation d’API REST avec Spring Boot et Swagger. Contribution à la mise en conformité de l’accessibilité numérique. ",
      tags: ["SpringBoot", "Angular", "MySQL", "Jenkins", "SonarQube", "Gitlab", "Docker"],
      link: "https://www.lapostegroupe.com/fr/services-courrier-colis "
    },
    {
      period: " Novembre 2021 - Septembre 2022 ",
      title: " Développeuse web ",
      company: " MILOE Santé ",
      description: " Amélioration et optimisation des fonctionnalités d’un projet web existant pour enrichir l’expérience utilisateur. Intégration d’un chatbot et personnalisation graphique (bannières, cookies) afin de renforcer l’ergonomie et l’attractivité du site. Travail en autonomie dans un contexte 100 % télétravail. ",
      tags: ["Reactjs", "Tailwind CSS", "GraphQL"],
      link: "https://www.miloe-sante.com/"
    }, 
  ]

  

}
