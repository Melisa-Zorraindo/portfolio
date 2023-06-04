<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Drawer } from '@skeletonlabs/skeleton';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
</script>

<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-60 sm:w-0">
	<svelte:fragment slot="header"><Header /></svelte:fragment>

	<main>
		<slot />
	</main>

	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
