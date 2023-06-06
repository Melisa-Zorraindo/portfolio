import type { tagsType } from './tagsTypes';

export interface ProjectType {
	image: string;
	tags: typeof tagsType;
	title: string;
	description: string;
	type: string;
	code: string;
	demo: string;
}
