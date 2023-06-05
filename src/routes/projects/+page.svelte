<script lang="ts">
	import Card from '$lib/components/elements/Card.svelte';
	export let data;

	let { projects } = data;
</script>

<div class="p-4 flex flex-col gap-14">
	<div>
		<h1 class="h1 mt-20 mb-10">Featured projects</h1>
		<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-10">
			{#each projects as project}
				{#if project.type === 'featured'}
					<Card {project} />
				{/if}
			{/each}
		</div>
	</div>

	<div>
		<h2 class="h1 mt-20 mb-10">More projects</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-10">
			{#each projects as project}
				{#if project.type === 'more'}
					<Card {project} />
				{/if}
			{/each}
		</div>
	</div>

	<div>
		<h2 class="h1 mt-20 mb-10">Small projects</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-10">
			{#each projects as project}
				{#if project.type === 'small'}
					<Card {project} />
				{/if}
			{/each}
		</div>
	</div>
</div>

<!-- ps-4 pt-12 pb-10 -->
<!-- p-4 pb-10 -->
