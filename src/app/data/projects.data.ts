export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export const PROJECTS: Project[] = [
   {
    id: 'laposte',
    title: 'Application RER',
    description: 'Application interne de reporting des releases de toutes les applications utilisées par les équipes de la Poste branche Service-Courrier-Colis',
    tags: ['Angular', 'Springboot', 'Angular Material','MySQL', 'Jenkins', 'Chart.js'],
    codeUrl: 'https://github.com/',
    demoUrl: 'https://www.lapostegroupe.com/fr/services-courrier-colis',
  },
   {
    id: 'portfolio',
    title: 'Portfolio personnel',
    description: 'Première version de mon portfolio pour me présenter à vous et vous montrer mes projets (lien actuel)',
    tags: ['Angular', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    codeUrl: 'https://github.com/Caprice943/portfolio-hero',
    demoUrl: '',
  },
  {
    id: 'dashboard',
    title: 'Dashboard KPI Nasa',
    description: 'Dashboard interactif Angular permettant de visualiser des données spatiales de la NASA (astéroïdes, activité solaire, images astronomiques) via des graphiques dynamiques avec ApexCharts.',
    tags: ['Angular', 'Typescript', 'ApexCharts', 'NASA APIs', 'Vercel', 'RxJs/Signals'],
    codeUrl: 'https://github.com/Caprice943/dashboard-kpi-nasa',
    demoUrl: 'https://dashboard-kpi-nasa.vercel.app/',
  },
  {
    id: 'memorygame',
    title: 'Jeu de Mémoire',
    description: 'Jeu de mémoire qui consiste à retrouver les paires de cartes identiques le plus rapidement possible',
    tags: ['React', 'CSS', 'Vercel'],
    codeUrl: 'https://github.com/Caprice943/Memory-game-reactjs',
    demoUrl: 'https://memory-game-reactjs.vercel.app/',
  },


  // {
  //   id: 'blackclover',
  //   title: 'Application BlackClover',
  //   description:
  //     'Application qui affiche nos personnages préférés de Black Clover',
  //   tags: ['Angular', 'CSS', 'Firebase'],
  //   codeUrl: 'https://github.com/Caprice943/workshop_blackClover',
  //   demoUrl: 'https://angular-pokeprice-app.web.app/mages',
  // },
];
