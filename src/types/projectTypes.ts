import type { tagsType } from './tagsTypes';

export interface ProjectType {
	title: string;
	company: string;
	description: string;
	type: string;
	image: string;
	tags: typeof tagsType;
	code: string;
	website: string;
	location: string;
	startDate: string;
	endDate: string;
}
