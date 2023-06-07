<script lang="ts">
	import { onMount } from 'svelte';
	import type { ProjectType } from '$types/projectTypes';
	import { blur, fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import PrimaryCard from '$lib/components/elements/cards/PrimaryCard.svelte';
	import SecondaryCard from '$lib/components/elements/cards/SecondaryCard.svelte';
	import TertiaryCard from '$lib/components/elements/cards/TertiaryCard.svelte';

	export let data: { projects: ProjectType[] };

	let { projects } = data;

	const cardContainerClass: string =
		'grid grid-cols-1 lg:grid-cols-2 xxxl:grid-cols-3 gap-x-6 gap-y-10';

	let cardTransition: boolean = false;
	let section: boolean = false;

	onMount(() => {
		cardTransition = true;
		section = true;
	});
</script>

<svelte:head>
	<title>MZ · Projects</title>
</svelte:head>

{#if section}
	<div class="flex flex-col gap-14" out:blur={{ amount: 10 }}>
		<section class="p-4">
			<h1 class="h1 mt-5 mb-4 sm:mt-10 sm:mb-7">Featured projects</h1>
			{#if cardTransition}
				<div class={cardContainerClass} in:fly={{ duration: 800, x: -300, easing: sineInOut }}>
					{#each projects as project}
						{#if project.type === 'featured'}
							<PrimaryCard {project} />
						{/if}
					{/each}
				</div>
			{/if}
		</section>

		<section class="p-4 pb-10 bg-surface-700">
			<h2 class="h1 mt-5 mb-4 sm:mt-10 sm:mb-7">More projects</h2>
			{#if cardTransition}
				<div class={cardContainerClass} in:fly={{ duration: 800, x: -300, easing: sineInOut }}>
					{#each projects as project}
						{#if project.type === 'more'}
							<SecondaryCard {project} />
						{/if}
					{/each}
				</div>
			{/if}
		</section>

		<section class="p-4">
			<h2 class="h1 mt-5 mb-4 sm:mt-0 sm:mb-7">Small projects</h2>
			{#if cardTransition}
				<div
					class={cardContainerClass}
					in:fly={{ delay: 300, duration: 800, x: -300, easing: sineInOut }}
				>
					{#each projects as project}
						{#if project.type === 'small'}
							<TertiaryCard {project} />
						{/if}
					{/each}
				</div>
			{/if}
		</section>
	</div>
{/if}
