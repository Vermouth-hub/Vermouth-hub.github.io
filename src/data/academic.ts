export interface PublicationLink {
	label: string;
	href: string;
}

export interface Publication {
	year: number;
	title: string;
	authors: string;
	venue: string;
	status: string;
	description: string;
	links: PublicationLink[];
}

// Add future papers and academic research records to this collection.
export const publications: Publication[] = [
	{
		year: 2025,
		title: 'TreeMind: Automatically Reproducing Android Bug Reports via LLM-empowered Monte Carlo Tree Search',
		authors: 'Zhengyu Chen, Zhaoyi Meng, Wenxiang Zhao, Wansen Wang, Wenchao Huang, Jie Cui, Hong Zhong, Yan Xiong',
		venue: 'arXiv · Software Engineering',
		status: 'Preprint',
		description:
			'TreeMind combines LLM semantic reasoning with Monte Carlo tree search to reproduce Android bugs from incomplete bug reports.',
		links: [
			{ label: 'arXiv', href: 'https://arxiv.org/abs/2509.22431' },
			{ label: 'PDF', href: 'https://arxiv.org/pdf/2509.22431' }
		]
	}
];
