export function load() {
	return {
		projects: [
			{
				title: 'Mollify',
				description:
					"LMS library —a fusion of SvelteKit, TypeScript, and the limitless capabilities of AI. Developed as the pinnacle of the Noroff curriculum's final exam project, this cutting-edge solution revolutionises education by empowering both teachers and students with AI-driven assistance. Harnessing the power of collaboration and agile development practices, we seamlessly integrate Git for effortless version control.",
				type: 'featured',
				image: '/project-images/lms.png',
				tags: [
					{ name: 'SvelteKit', logo: 'bx-no-entry' },
					{ name: 'TypeScript', logo: 'bxl-typescript' },
					{ name: 'Skeleton UI', logo: 'bxs-skull' },
					{ name: 'Git', logo: 'bxl-git' },
					{ name: 'AI', logo: 'bx-chip' }
				],
				code: 'https://github.com/Fermain/-mollify',
				demo: ''
			},
			{
				title: 'Techtopia',
				description:
					'Elegant e-commerce site developed as part of the Noroff curriculum, showcasing the seamless synergy of React and JavaScript. Embracing the philosophy of minimalism, this platform offers a clean and uncluttered aesthetic, creating a delightful browsing experience. Styled components effortlessly bring forth a touch of sophistication, while the school-provided API facilitates smooth CRUD operations.',
				type: 'featured',
				image: '/project-images/e-com.png',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
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
					'Exciting Auction House Website, crafted as part of the Noroff curriculum, where the power of HTML, Bootstrap, and JavaScript converge. This platform embraces a comic book inspired aesthetic, while delivering a seamless user experience. It captivates users, guiding them effortlessly through the auction process. Leveraging the API provided by the school, it empowers users to perform CRUD operations with ease. ',
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
					'Feature-rich Social Media Platform developed as part of the Noroff curriculum, driven by HTML, Bootstrap, and JavaScript. This innovative platform is designed to enhance your online social interactions with seamless functionality. Leveraging the API provided by the school, users can effortlessly perform CRUD operations, empowering them to connect and engage with ease.',
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
					"Inspiring Fitness and Nutrition Blog Site, developed as the exam project for the first year of Noroff's Front-end Development curriculum. It's powered by HTML, CSS, and JavaScript. With a sleek and minimalist design, it prioritises the delivery of insightful content. Leveraging a headless CMS, it ensures seamless management and organization of articles and resources.",
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
					"E-commerce site tailored for a winter jacket retailer, developed as part of Noroff's Front-end Development curriculum. Powered by HTML, CSS, and JavaScript, it provides a smooth and engaging journey for customers seeking the perfect winter attire. Leveraging the capabilities of a headless CMS, it effortlessly manages products, ensuring a streamlined e-commerce experience.",
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
					"Fun website designed for young explorers aged 5-12, with a keen interest in science and adventure. The site serves as the online gateway to a captivating children's museum, developed as part of Noroff's Front-end Development curriculum. Powered by HTML, CSS, and JavaScript, and with a vibrant and engaging look and feel, it captivates young minds, igniting their curiosity and thirst for knowledge.",
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
					'A calorie and a lifting calculator, crafted to assist dedicated gym goers in achieving their fitness goals. Developed with React and JavaScript, and powered by styled components, this innovative solution boasts a modern and sleek look, aligned with the latest design trends. Leveraging the efficiency of Zustand for state management, it ensures a smooth performance, allowing users to focus on their fitness journey.',
				type: 'small',
				image: '/project-images/calculators.png',
				tags: [
					{ name: 'React', logo: 'bxl-react' },
					{ name: 'JavaScript', logo: 'bxl-javascript' },
					{ name: 'Styled components', logo: 'bx-code-alt' }
				],
				code: 'https://github.com/Melisa-Zorraindo/fitness-calculators',
				demo: 'https://gregarious-marshmallow-42a145.netlify.app/'
			},
			{
				title: 'Event Countdown',
				description:
					"Single Page Application (SPA) that will revolutionise the way you anticipate and celebrate your important events. Meticulously crafted using only HTML, CSS, and JavaScript, this dynamic creation puts you in control. With its complete customisability, it empowers you to personalise and tailor the countdown to your next significant milestone. Whether it's a birthday, holiday, or any other exciting occasion, this SPA brings your anticipation to life.",
				type: 'small',
				image: '/project-images/event-countdown.png',
				tags: [
					{ name: 'HTML5', logo: 'bxl-html5' },
					{ name: 'CSS', logo: 'bxl-css3' },
					{ name: 'JavaScript', logo: 'bxl-javascript' }
				],
				code: 'https://github.com/Melisa-Zorraindo/event-countdown',
				demo: ''
			},
			{
				title: 'Solar System Quiz',
				description:
					'Captivating Single Page Application (SPA) that will transport you on an exhilarating cosmic adventure. Developed exclusively using HTML, CSS, and JavaScript, this creation embodies a space-like look and feel, immersing you in the wonders of the solar system. Prepare to embark on a thrilling journey through this interactive and engaging quiz, where your knowledge about the celestial bodies will be put to the test.',
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
