<script lang="ts">
	import Card from '$lib/components/elements/Card.svelte';
	export let data;

	let { projects } = data;
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
