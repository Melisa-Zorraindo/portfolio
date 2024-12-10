<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<ParaglideJS {i18n}>

	<Header />

	<main>
		<slot />
	</main>

	<Footer />

</ParaglideJS>

<style>
	main {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>