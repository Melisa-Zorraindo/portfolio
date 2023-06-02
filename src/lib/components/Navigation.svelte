<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav>
	<ul class="flex flex-col gap-4 p-4 sm:flex-row sm:p-0">
		<li class="hover:bg-primary-hover-token rounded-container-token p-2">
			<a href="/" class="block" on:click={drawerClose}>Home</a>
		</li>
		<li class="hover:bg-primary-hover-token rounded-container-token p-2">
			<a href="/projects" class="block" on:click={drawerClose}>Projects</a>
		</li>
		<li class="hover:bg-primary-hover-token rounded-container-token p-2">
			<a href="/contact" class="block" on:click={drawerClose}>Contact</a>
		</li>
	</ul>
</nav>
