<script lang="ts">
	import { onMount } from 'svelte';

	let heroSection: boolean = false;

	onMount(() => {
		heroSection = true;
	});
</script>

<svelte:head>
	<title>Melisa's portfolio :: Home</title>
</svelte:head>

{#if heroSection}
	<div class="container">
		<div>
			<h1>WELCOME TO MY PORTFOLIO</h1>
		</div>
		<div class="frame">
			<img src="/project-images/portada.jpg" alt="Me, coding outdoors on my laptop">
		</div>
	</div>
{/if}

<style>
	.frame {
		padding: 2rem;
	}

	img {
		width: 50%;
		display: block;
	}

	.container {
		display: flex;
		gap: 5rem;
		border-bottom: 1px solid #d5d5d5;
		border-right: 2px solid #d5d5d5;
		align-items: center;
	}

	h1 {
		font-size: 7rem;
		text-align: center;
	}

	@media (max-width: 1035px) {
		h1 {
		font-size: 8vw;
		}
	}

</style>
