<script lang="ts">
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import SecondaryButton from './buttons/SecondaryButton.svelte';

	let tagsType = [] as { name: string; logo: string }[];

	let projectType = {
		image: 'string',
		tags: tagsType,
		title: 'string',
		description: 'string',
		type: 'string'
	};

	export let project: typeof projectType;
</script>

<div class="flex flex-col sm:flex-row m-4 border border-primary-500 rounded">
	<div class="bg-primary-800/50 p-4 sm:w-1/3">
		<img src={project.image} alt="" class="pt-3 pb-1.5 mb-1" />
		<div class="flex flex-wrap gap-1">
			{#each project.tags as tag}
				<span class="chip variant-filled-secondary px-2 py-0"
					><i class="bx {tag.logo} text-lg pe-1" />{tag.name}</span
				>
			{/each}
		</div>
	</div>
	<div class="card rounded-none rounded-e sm:w-2/3">
		<header class="card-header">
			<h2 class="h2 font-semibold pt-2">{project.title}</h2>
		</header>
		<section class="px-4 py-6">
			<p>{project.description}</p>
		</section>
		<footer class="card-footer flex flex-wrap gap-2"><PrimaryButton /><SecondaryButton /></footer>
	</div>
</div>
