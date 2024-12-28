export function load() {
	return {
		projects: [
			{
				title: 'Mollify',
				description:
					'Open source LMS library that empowers teachers and students with AI-driven assistance.',
				type: 'featured',
				image: '/project-images/lms.png',
				tags: [
					{ name: 'SvelteKit', logo: 'bx-no-entry' },
					{ name: 'AI', logo: 'bx-chip' },
					{ name: 'TypeScript', logo: 'bxl-typescript' },
					{ name: 'Tailwind', logo: 'bxl-tailwind-css' }
				],
				code: 'https://github.com/Fermain/-mollify',
				website: ''
			},
			{
				title: 'Techtopia',
				description: 'E-commerce site created as part of the Noroff curriculum.',
				type: 'featured',
				image: '/project-images/e-com.png',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
					{ name: 'API', logo: 'bx-transfer-alt' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/noroff-react-project',
				website: 'https://super-jalebi-36d00a.netlify.app/'
			},
			{
				title: 'Biddable',
				description: 'Auction House Website crafted as part of the Noroff curriculum.',
				type: 'featured',
				image: '/project-images/auction.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'Bootstrap', logo: 'bxl-bootstrap' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'API', logo: 'bx-transfer-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/auction-house-website',
				website: 'https://fluffy-shortbread-738c45.netlify.app/'
			},
			{
				title: 'Socials',
				description: 'Social Media Platform developed as part of the Noroff curriculum.',
				type: 'more',
				image: '/project-images/socials.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'API', logo: 'bx-transfer-alt' },
					{ name: 'Bootstrap', logo: 'bxl-bootstrap' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/social-media-platform',
				website: ''
			},
			{
				title: 'Fit Factory',
				description: 'Fitness and Nutrition blog-site developed as part of the Noroff curriculum.',
				type: 'more',
				image: '/project-images/fitfactory.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'WordPress', logo: 'bxl-wordpress' }
				],
				code: 'https://github.com/Melisa-Zorraindo/project-exam-1-Melisa-Zorraindo',
				website: ''
			},
			{
				title: 'Rainy Days',
				description: 'E-commerce site developed as part of the Noroff curriculum.',
				type: 'more',
				image: '/project-images/rainy-days.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'WordPress', logo: 'bxl-wordpress' }
				],
				code: 'https://github.com/Noroff-FEU-Assignments/cross-course-project-Melisa-Zorraindo',
				website: ''
			},
			{
				title: 'Science Museum',
				description:
					"Static website developed as part of Noroff's Front-end Development curriculum.",
				type: 'more',
				image: '/project-images/csm.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/semester-project-one',
				website: 'https://csm-noroff-project.netlify.app/'
			},
			{
				title: 'Fitness Calculators',
				description:
					'Calorie and lifting calculator, crafted to assist gym goers in achieving their fitness goals.',
				type: 'small',
				image: '/project-images/calculators.png',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
					{ name: 'TypeScript', logo: 'bxl-typescript' },
					{ name: 'Styled components', logo: 'bx-code-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/fitness-calculators',
				website: 'https://fitness-calculators.netlify.app/'
			},
			{
				title: 'Event Countdown',
				description: 'Single Page Application designed to anticipate your important events.',
				type: 'small',
				image: '/project-images/event-countdown.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'API', logo: 'bx-transfer-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/event-countdown',
				website: ''
			},
			{
				title: 'Solar System Quiz',
				description:
					'Single Page Application that will transport you on an exhilarating cosmic adventure.',
				type: 'small',
				image: '/project-images/ss-quiz.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/solar-system-quiz',
				website: 'https://ss-quiz.netlify.app/'
			},
			{
				title: 'Junior Software Developer',
				company: 'eLoaded',
				location: 'Innsbruck - Austria',
				startDate: 'January 2024',
				endDate: 'Present',
				description:
					'Contribute to the development, optimisation, and maintenance of microservices and APIs for an electric vehicle charging platform. Responsibilities include implementing features, enhancing data handling, ensuring test coverage, resolving bugs, and refining system integrations to support seamless operations and UX.',
				type: 'job',
				tags: [
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'Node.js', logo: '' },
					{ name: 'Java', logo: '' },
					{ name: 'Spring Boot', logo: '' }
				],
				website: 'https://www.eloaded.eu/'
			},
			{
				title: 'Research project - Contributor',
				company: 'Network Perception',
				location: 'Chicago - USA',
				startDate: 'July 2023',
				endDate: 'August 2023',
				description:
					'Network Perception developed a research plan to determine the feasibility of using a React / SVG combination to display a 2D network topology map. I followed the method in their research plan, which included working toward defined deliverables and checking in weekly with their software engineering team for mentoring and support. I fulfilled my commitments and my experience provided important insights to their team.',
				type: 'job',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				website: 'https://www.network-perception.com/'
			}
		]
	};
}
