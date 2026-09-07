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
      '通过 LLM 增强的蒙特卡洛树搜索，在不完整 Bug Report 下进行目标驱动的 Android UI 探索与缺陷自动复现。',
    demoLink: 'https://arxiv.org/abs/2509.22431',
    linkLabel: 'arXiv',
    tags: ['LLM', 'MCTS', 'Android', 'Research']
  },
  {
    name: '常见算法总结',
    description:
      '面向机试与日常算法训练的长期笔记，整理数组、链表、哈希、字符串、排序与高频题型。',
    demoLink: '/algorithm-summary/',
    linkLabel: '阅读全文',
    tags: ['Algorithms', 'C++', 'Notes']
  }
];
