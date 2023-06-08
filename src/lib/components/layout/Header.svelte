<script lang="ts">
	import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<AppBar padding="py-1 px-4">
	<svelte:fragment slot="lead">
		<div class="flex items-center">
			<button class="sm:hidden btn btn-sm mr-4" on:click={drawerOpen}>
				<i class="bx bx-menu-alt-left text-3xl" />
			</button>
			<a
				href="/"
				class="text-xl uppercase bg-primary-500 p-3 rounded rounded-full text-surface-900 font-semibold"
				>mz</a
			>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="hidden sm:block">
			<Navigation />
		</div>
	</svelte:fragment>
</AppBar>
