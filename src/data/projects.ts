export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	name: string;
	description: string;
	tags?: string[];
	date?: string;
	image?: string;
	links?: ProjectLink[];
}

// Personal software projects belong here. Research publications live in
// academic.ts, while notes and articles live in src/content/blog.
export const projects: Project[] = [];
