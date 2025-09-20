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
    description: 'Jeu de mémoire qui consiste à retrouver les paires de cartes identiques le plus rapidement possible',
    tags: ['React', 'CSS', 'Vercel'],
    codeUrl: 'https://github.com/Caprice943/Memory-game-reactjs',
    demoUrl: 'https://memory-game-reactjs.vercel.app/',
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
