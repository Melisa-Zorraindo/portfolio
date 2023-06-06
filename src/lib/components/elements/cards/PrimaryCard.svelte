<script lang="ts">
	import type { ProjectType } from '$types/projectTypes';
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import SecondaryButton from '../buttons/SecondaryButton.svelte';

	export let project: ProjectType;
</script>

<div class="flex flex-col sm:flex-row border border-primary-500 rounded">
	<div class="bg-primary-900/50 p-4 sm:w-1/3">
		<img src={project.image} alt="project" class="pt-3 pb-1.5 mb-1" />
		<div class="flex flex-wrap gap-1">
			{#each project.tags as tag}
				<span class="badge variant-filled-secondary px-2 py-0 font-normal rounded"
					><i class="bx {tag.logo} text-lg pe-1" aria-hidden="true" />{tag.name}</span
				>
			{/each}
		</div>
	</div>
	<div class="card rounded-none rounded-e sm:w-2/3 flex flex-col justify-between">
		<div>
			<header class="card-header">
				<h2 class="h2 font-semibold pt-2">{project.title}</h2>
			</header>
			<section class="px-4 py-6">
				<p>{project.description}</p>
			</section>
		</div>
		<footer class="card-footer flex flex-wrap gap-2">
			<PrimaryButton code={project.code} /><SecondaryButton demo={project.demo} />
		</footer>
	</div>
</div>
