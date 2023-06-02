<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="flex items-center">
			<button class="sm:hidden btn btn-sm mr-4" on:click={drawerOpen}>
				<box-icon name="menu-alt-left" color="#fff" />
			</button>
			<strong class="text-xl uppercase">logo</strong>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="hidden sm:block">
			<Navigation />
		</div>
	</svelte:fragment>
</AppBar>
