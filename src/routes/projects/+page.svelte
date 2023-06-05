<script lang="ts">
	import Card from '$lib/components/elements/Card.svelte';

	let projects = [
		{
			image: '/project-images/lms.png',
			tags: [
				{ name: 'SvelteKit', logo: '' },
				{ name: 'TypeScript', logo: 'bxl-typescript' },
				{ name: 'Skeleton UI', logo: 'bxs-skull' },
				{ name: 'Git', logo: 'bxl-git' },
				{ name: 'AI', logo: 'bx-chip' }
			],
			title: 'Mollify',
			description:
				'Developed as part of the Noroff curriculum as the final exam project. Worked in an agile environment to develop an lms library',
			type: 'featured'
		},
		{
			image: '/project-images/e-com.png',
			tags: [
				{ name: 'React', logo: 'bxl-react' },
				{ name: 'JavaScript', logo: 'bxl-javascript' },
				{ name: 'Styled components', logo: 'bx-code-alt' },
				{ name: 'API', logo: 'bx-transfer-alt' }
			],
			title: 'Techtopia',
			description:
				'Developed as part of the Noroff curriculum. Deploys API to develop an e-commerce site where users can buy/search for items.',
			type: 'featured'
		},
		{
			image: '/project-images/auction.png',
			tags: [
				{ name: 'HTML5', logo: 'bxl-html5' },
				{ name: 'Bootstrap', logo: 'bxl-bootstrap' },
				{ name: 'JavaScript', logo: 'bxl-javascript' },
				{ name: 'API', logo: 'bx-transfer-alt' }
			],
			title: 'Auction House Website',
			description:
				'Developed as part of the Noroff curriculum. Deploys API to develop an auction house platform where users can buy/sell items. Features an original comic/pinup look and feel',
			type: 'featured'
		}
	];
</script>

<div>
	<h1 class="h1 p-4">Featured projects</h1>
	<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
		{#each projects as project}
			{#if project.type === 'featured'}
				<Card {project} />
			{/if}
		{/each}
	</div>
</div>
