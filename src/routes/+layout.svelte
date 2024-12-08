<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
</script>

<ParaglideJS {i18n}>

	<Navigation />

	<main>
		<slot />
	</main>

	<Footer />

</ParaglideJS>

<style>
	main {
		flex: 1;
	}

	@media (max-width: 1501px) {
		main {
		padding: 0 2rem;
		}
	}
</style>