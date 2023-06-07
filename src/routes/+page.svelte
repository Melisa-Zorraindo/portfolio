<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let heroSection: boolean = false;

	onMount(() => {
		heroSection = true;
	});
</script>

<svelte:head>
	<title>MZ · Home</title>
</svelte:head>

{#if heroSection}
	<div
		class="h-full flex flex-col items-center justify-center sm:flex-row p-4 bg-gradient-to-br from-surface-400 via-tertiary-800 to-surface-800"
		transition:blur={{ amount: 10 }}
	>
		<img src="/my-picture.jpg" alt="" class="rounded rounded-full w-72 me-6" />
		<div class="sm:w-2/3 flex flex-col justify-between">
			<div>
				<header class="card-header">
					<h2 class="h4 bg-secondary-700/50 inline p-1 rounded">
						&#60; Frontend developer &#47; &#62;
					</h2>
					<h1 class="h1 mt-2">Melisa Zorraindo</h1>
				</header>
				<section class="px-4 py-6">
					<p class="text-lg lg:text-xl">
						I absolutely love creating smooth user experiences and crafting awesome IT solutions!
						Solving complex problems is my jam, and I'm always eager to learn and collaborate with
						others. As a developer, I take great pride in delivering top-notch work and ensuring the
						highest quality. During my academic journey, I've gained hands-on experience in building
						web applications using HTML, CSS, JavaScript, and React. My focus? Making them
						responsive and accessible to everyone. Let's create something amazing together!
					</p>
				</section>
			</div>
			<footer class="card-footer text-end">
				<a href="./projects" class="btn p-0 bg-primary-500 text-surface-900 text-lg lg:text-xl">
					<i class="bx bx-book-bookmark text-3xl ps-1" aria-hidden="true" />
					<span class="pe-2">View my projects</span>
				</a>
			</footer>
		</div>
	</div>
{/if}
