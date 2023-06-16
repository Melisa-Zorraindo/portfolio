export function load() {
	return {
		projects: [
			{
				title: 'Mollify',
				description:
					'LMS library powered by SvelteKit, TypeScript, and AI technology. Developed as a final exam project, it empowers teachers and students with AI-driven assistance. It seamlessly integrates Git for effortless version control.',
				type: 'featured',
				image: '/project-images/lms.png',
				tags: [
					{ name: 'SvelteKit', logo: 'bx-no-entry' },
					{ name: 'TypeScript', logo: 'bxl-typescript' },
					{ name: 'Skeleton UI', logo: 'bxs-skull' },
					{ name: 'Tailwind CSS', logo: 'bxl-tailwind-css' },
					{ name: 'Git', logo: 'bxl-git' },
					{ name: 'AI', logo: 'bx-chip' }
				],
				code: 'https://github.com/Fermain/-mollify',
				demo: ''
			},
			{
				title: 'Techtopia',
				description:
					'Elegant e-commerce site created as part of the Noroff curriculum It demonstrates the seamless synergy between React and JavaScript. With a minimalist design, the platform provides a clean and uncluttered browsing experience. The API provided by the school enables smooth CRUD operations.',
				type: 'featured',
				image: '/project-images/e-com.png',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
					{ name: 'React Hook Forms', logo: 'bx-no-entry' },
					{ name: 'Zustand', logo: 'bx-no-entry' },
					{ name: 'Yup', logo: 'bx-no-entry' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'Styled components', logo: 'bx-code-alt' },
					{ name: 'API', logo: 'bx-transfer-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/noroff-react-project',
				demo: 'https://super-jalebi-36d00a.netlify.app/'
			},
			{
				title: 'Biddable',
				description:
					'Auction House Website, crafted as part of the Noroff curriculum, where the power of HTML, Bootstrap, and JavaScript converge. This platform embraces a comic book inspired aesthetic and leverages the API provided by the school to empower users to perform CRUD operations with ease. ',
				type: 'featured',
				image: '/project-images/auction.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'Bootstrap', logo: 'bxl-bootstrap' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'API', logo: 'bx-transfer-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/auction-house-website',
				demo: 'https://fluffy-shortbread-738c45.netlify.app/'
			},
			{
				title: 'Socials',
				description:
					'Feature-rich Social Media Platform developed as part of the Noroff curriculum, driven by HTML, Bootstrap, and JavaScript. Leveraging the API provided by the school, users can effortlessly perform CRUD operations, empowering them to connect and engage with ease.',
				type: 'more',
				image: '/project-images/socials.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'Bootstrap', logo: 'bxl-bootstrap' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'API', logo: 'bx-transfer-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/social-media-platform',
				demo: ''
			},
			{
				title: 'FitFactory',
				description:
					"Inspiring Fitness and Nutrition Blog Site, developed as the exam project for the first year of Noroff's Front-end Development curriculum. Powered by HTML, CSS, and JavaScript. Leveraging a headless CMS, it ensures seamless management and organization of articles and resources.",
				type: 'more',
				image: '/project-images/fitfactory.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'WordPress', logo: 'bxl-wordpress' }
				],
				code: 'https://github.com/Melisa-Zorraindo/project-exam-1-Melisa-Zorraindo',
				demo: 'https://fitfactory-noroff-project.netlify.app/'
			},
			{
				title: 'Rainy Days',
				description:
					"E-commerce site tailored for a winter jacket retailer, developed as part of Noroff's Front-end Development curriculum. Powered by HTML, CSS, and JavaScript. Leveraging the capabilities of a headless CMS, it effortlessly manages products, ensuring a streamlined e-commerce experience.",
				type: 'more',
				image: '/project-images/rainy-days.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'WordPress', logo: 'bxl-wordpress' }
				],
				code: 'https://github.com/Noroff-FEU-Assignments/cross-course-project-Melisa-Zorraindo',
				demo: 'https://rainy-days-noroff-project.netlify.app/'
			},
			{
				title: 'Community Science Museum',
				description:
					"Fun website designed for young explorers aged 5-12, with a keen interest in science and adventure, developed as part of Noroff's Front-end Development curriculum. Powered by HTML, CSS, and JavaScript, features  vibrant and engaging look and feel.",
				type: 'more',
				image: '/project-images/csm.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/semester-project-one',
				demo: 'https://csm-noroff-project.netlify.app/'
			},
			{
				title: 'Fitness Calculators',
				description:
					'A calorie and a lifting calculator, crafted to assist dedicated gym goers in achieving their fitness goals. Developed with React and TypeScript, and powered by styled components, this innovative solution boasts a modern and sleek look. Leveraging the efficiency of Zustand for state management, it ensures a smooth performance.',
				type: 'small',
				image: '/project-images/calculators.png',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
					{ name: 'TypeScript', logo: 'bxl-typescript' },
					{ name: 'Styled components', logo: 'bx-code-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/fitness-calculators',
				demo: 'https://gregarious-marshmallow-42a145.netlify.app/'
			},
			{
				title: 'Event Countdown',
				description:
					'Single Page Application (SPA) design to anticipate and celebrate your important events. Crafted using only HTML, CSS, and JavaScript. With its complete customisability, it empowers you to personalise and tailor the countdown to your next significant milestone.',
				type: 'small',
				image: '/project-images/event-countdown.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'API', logo: 'bx-transfer-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/event-countdown',
				demo: ''
			},
			{
				title: 'Solar System Quiz',
				description:
					'Captivating Single Page Application (SPA) that will transport you on an exhilarating cosmic adventure. Developed exclusively using HTML, CSS, and JavaScript, this creation embodies a space-like look and feel, immersing you in the wonders of the solar system.',
				type: 'small',
				image: '/project-images/ss-quiz.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/solar-system-quiz',
				demo: 'https://ss-quiz.netlify.app/'
			}
		]
	};
}
