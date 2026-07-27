export interface Project {
  name: string;
  demoLink: string;
  tags?: string[];
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'TreeMind',
    description:
      'An LLM-empowered Monte Carlo Tree Search method for automatically reproducing Android bug reports.',
    demoLink: 'https://github.com/Vermouth-hub/TreeMind',
    tags: ['LLM', 'MCTS', 'Android', 'Research']
  },
  {
    name: 'Custom System based on Django',
    description: 'A custom management system based on Django and MySQL, focused on practical backend development.',
    demoLink: 'https://github.com/Vermouth-hub/CRM-System-based-Django',
    tags: ['Python', 'MySQL', 'Django']
  },
  {
    name: 'SmartPlan App',
    description: 'A smart plan app to manage business plans and daily work.',
    demoLink: 'https://github.com/Vermouth-hub/HarmonyOS_SmartPlan',
    tags: ['HarmonyOS', 'ArkTS']
  },
  {
    name: 'Math Modeling Toolkit',
    description:
      'Competition-oriented modeling practice with regression, clustering, Monte Carlo simulation and statistical validation.',
    demoLink: 'https://github.com/Vermouth-hub',
    tags: ['Modeling', 'Python', 'Statistics']
  },
  {
    name: 'Security Practice Notes',
    description: 'Reverse engineering, CTF defense practice, emergency response and intranet penetration learning notes.',
    demoLink: 'https://github.com/Vermouth-hub',
    tags: ['CTF', 'Reverse', 'Security']
  }
];
