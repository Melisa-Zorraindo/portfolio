<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import PrimaryCard from '$lib/components/elements/cards/PrimaryCard.svelte';
	import SecondaryCard from '$lib/components/elements/cards/SecondaryCard.svelte';
	import TertiaryCard from '$lib/components/elements/cards/TertiaryCard.svelte';

	export let data;

	let { projects } = data;

	const cardContainerClass = 'grid grid-cols-1 lg:grid-cols-2 xxxl:grid-cols-3 gap-x-6 gap-y-10';

	let cardTransition: boolean = false;

	onMount(() => {
		cardTransition = true;
	});
</script>

<svelte:head>
	<title>MZ · Projects</title>
</svelte:head>

<div class="flex flex-col gap-14">
	<section class="p-4">
		<h1 class="h1 mt-20 mb-10">Featured projects</h1>
		{#if cardTransition}
			<div
				class={cardContainerClass}
				transition:fly={{ duration: 800, x: -300, easing: sineInOut }}
			>
				{#each projects as project}
					{#if project.type === 'featured'}
						<PrimaryCard {project} />
					{/if}
				{/each}
			</div>
		{/if}
	</section>

	<section class="p-4 pb-10 bg-surface-700">
		<h2 class="h1 mt-20 mb-10">More projects</h2>
		<div class={cardContainerClass}>
			{#each projects as project}
				{#if project.type === 'more'}
					<SecondaryCard {project} />
				{/if}
			{/each}
		</div>
	</section>

	<section class="p-4">
		<h2 class="h1 mt-20 mb-10">Small projects</h2>
		<div class={cardContainerClass}>
			{#each projects as project}
				{#if project.type === 'small'}
					<TertiaryCard {project} />
				{/if}
			{/each}
		</div>
	</section>
</div>
