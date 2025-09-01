export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
  // image?: string;
  // details?: string;
}

export const PROJECTS: Project[] = [
   {
    id: 'laposte',
    title: 'Application RER',
    description: 'Application de reporting interne aux équipes de la Poste branche Service-Courrier-Colis',
    tags: ['Angular', 'Springboot', 'Angular Material','MySQL'],
    codeUrl: 'https://github.com/',
    demoUrl: 'https://www.lapostegroupe.com/fr/services-courrier-colis',
  },
   {
    id: 'portofolio',
    title: 'Portofolio personnel',
    description: 'Première version de mon portofolio pour me présenter à vous',
    tags: ['Angular', 'SCSS', 'Firebase', 'TypeScript'],
    codeUrl: 'https://github.com/Caprice943/portfolio-hero',
    demoUrl: '',
  },
  // {
  //   id: 'meteo',
  //   title: 'Application Météo',
  //   description: 'Application Météo ',
  //   tags: ['JavaScript', 'CSS', 'Firebase'],
  //   codeUrl: '',
  //   demoUrl: '',
  // },
  {
    id: 'memorygame',
    title: 'Jeu de Mémoire',
    description: 'Jeu de mémoire',
    tags: ['React', 'CSS', 'Firebase'],
    codeUrl: '',
    demoUrl: '',
  },
  // {
  //   id: 'messagingapp',
  //   title: 'Application de messages',
  //   description:
  //     'Application personnalisée de message type Discord ou WhatsApp',
  //   tags: ['NodeJs', 'CSS', 'Firebase'],
  //   codeUrl: '',
  //   demoUrl: '',
  // },
    {
    id: 'blackclover',
    title: 'Application BlackClover',
    description:
      'Application qui affiche nos personnages préférés de Black Clover',
    tags: ['Angular', 'CSS', 'Firebase'],
    codeUrl: 'https://github.com/Caprice943/workshop_blackClover',
    demoUrl: 'https://angular-pokeprice-app.web.app/mages',
  },
];
