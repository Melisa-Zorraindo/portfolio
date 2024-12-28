<script lang="ts">
	import { onMount } from 'svelte';
	import PrimaryButton from '$lib/components/elements/buttons/PrimaryButton.svelte';

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
			<h1>MELISA ZORRAINDO</h1>
			<h2>Software developer</h2>
			<p>I build intuitive and efficient applications that make a positive impact. Whether it's streamlining backend processes, optimising data flow, or creating user-focused features, I enjoy tackling challenges and transforming ideas into robust solutions. </p>
			<p class="hobbies">	When I'm not coding, I'm exploring the world, learning languages, or attempting (and failing) at photography.</p>
			<p class="closure">Let's connect and create something amazing together!</p>
		<div class="btn-container">
			<PrimaryButton url="/projects" text="View projects" target="_self"/>
		</div>
	</div>
{/if}

<style>
	.container {
		padding: 0 2rem;
	}

	h1 {
		font-size: 1.2rem;
		font-weight: 400;
		color: var(--accent);
	}

	h2 {
		font-size: 1.6rem;
	}

	p {
		margin: 1rem 0 .7rem;
	}

	.hobbies, .closure {
		margin: .7rem 0;
	}

	.hobbies, .closure {
		display: none;
	}

	.btn-container {
		margin-top: 2rem;
		display: flex;
		justify-content: flex-end;
	}

	@media (min-width: 700px) {
		.container {
			max-width: 1000px;
		}

		.hobbies, .closure {
			display: block;
		}
	}

</style>
