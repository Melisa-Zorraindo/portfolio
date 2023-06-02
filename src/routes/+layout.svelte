<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>
