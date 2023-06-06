<script lang="ts">
	import PrimaryCard from '$lib/components/elements/cards/PrimaryCard.svelte';
	import SecondaryCard from '$lib/components/elements/cards/SecondaryCard.svelte';
	import TertiaryCard from '$lib/components/elements/cards/TertiaryCard.svelte';
	export let data;

	let { projects } = data;

	const cardContainerClass = 'grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-x-6 gap-y-10';
</script>

<svelte:head>
	<title>MZ · Projects</title>
</svelte:head>

<div class="p-4 flex flex-col gap-14">
	<div>
		<h1 class="h1 mt-20 mb-10">Featured projects</h1>
		<div class={cardContainerClass}>
			{#each projects as project}
				{#if project.type === 'featured'}
					<PrimaryCard {project} />
				{/if}
			{/each}
		</div>
	</div>

	<div>
		<h2 class="h1 mt-20 mb-10">More projects</h2>
		<div class={cardContainerClass}>
			{#each projects as project}
				{#if project.type === 'more'}
					<SecondaryCard {project} />
				{/if}
			{/each}
		</div>
	</div>

	<div class="mb-8">
		<h2 class="h1 mt-20 mb-10">Small projects</h2>
		<div class={cardContainerClass}>
			{#each projects as project}
				{#if project.type === 'small'}
					<TertiaryCard {project} />
				{/if}
			{/each}
		</div>
	</div>
</div>
