import type { tagsType } from './tagsTypes';

export interface ProjectType {
	title: string;
	description: string;
	type: string;
	image: string;
	tags: typeof tagsType;
	code: string;
	demo: string;
}
