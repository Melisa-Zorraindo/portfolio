<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav>
	<ul class="flex flex-col gap-4 p-4 sm:flex-row sm:p-0">
		<li class="hover:bg-primary-hover-token rounded-container-token p-2">
			<a href="/" on:click={drawerClose} class="flex sm:flex-col items-center gap-2 sm:gap-0"
				><i class="bx bx-home text-2xl" aria-hidden="true" />Home</a
			>
		</li>
		<li class="hover:bg-primary-hover-token rounded-container-token p-2">
			<a
				href="/projects"
				class="flex sm:flex-col items-center gap-2 sm:gap-0"
				on:click={drawerClose}
				><i class="bx bx-book-bookmark text-2xl" aria-hidden="true" />Projects</a
			>
		</li>
		<li class="hover:bg-primary-hover-token rounded-container-token p-2">
			<a href="/contact" class="flex sm:flex-col items-center gap-2 sm:gap-0" on:click={drawerClose}
				><i class="bx bxs-contact text-2xl" aria-hidden="true" />Contact</a
			>
		</li>
	</ul>
</nav>
