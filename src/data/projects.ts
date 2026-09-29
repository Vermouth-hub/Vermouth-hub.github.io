export interface Project {
	name: string;
	demoLink: string;
	linkLabel: string;
	tags?: string[];
	description?: string;
	timelineDate?: string;
	timelineType?: 'Research' | 'Project' | 'Paper' | 'Article' | 'Writing';
	[key: string]: unknown;
}

export const projects: Project[] = [
	{
		name: 'TreeMind',
		description: 'Automatically reproducing Android bugs from incomplete bug reports using LLM-enhanced Monte Carlo tree search.',
		demoLink: 'https://arxiv.org/abs/2509.22431',
		linkLabel: 'arXiv',
		tags: ['LLM', 'MCTS', 'Android', 'Research'],
		timelineDate: 'Sep 2025',
		timelineType: 'Research'
	},
	{
		name: 'algorithm-summary',
		description: 'Some basic algorithms and data structures summarize.',
		demoLink: '/algorithm-summary/',
		linkLabel: 'Read More',
		tags: ['Algorithms', 'C++', 'Notes'],
		timelineDate: 'Feb 2026',
		timelineType: 'Article'
	}
];
