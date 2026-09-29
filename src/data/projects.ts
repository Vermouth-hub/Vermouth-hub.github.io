export interface Project {
  name: string;
  demoLink: string;
  linkLabel: string;
  tags?: string[];
  description?: string;
  [key: string]: unknown;
}

export const projects: Project[] = [
  {
    name: 'TreeMind',
    description:
      'Automatically reproducing Android bugs from incomplete bug reports using LLM-enhanced Monte Carlo tree search.',
    demoLink: 'https://arxiv.org/abs/2509.22431',
    linkLabel: 'arXiv',
    tags: ['LLM', 'MCTS', 'Android', 'Research']
  },
  {
    name: '常见算法总结',
    description:
      'Some basic algorithms and data structures summarize.',
    demoLink: '/algorithm-summary/',
    linkLabel: 'Read More',
    tags: ['Algorithms', 'C++', 'Notes']
  }
];
