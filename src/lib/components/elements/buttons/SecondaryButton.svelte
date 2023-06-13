<script lang="ts">
	export let demo: string;

	//display the button oly if there's a live demo of the project
	let display: boolean = false;
	demo === '' ? (display = false) : (display = true);
</script>

{#if demo}
	<a
		href={demo}
		target="_blank"
		class="p-0.5 bg-gradient-to-br from-primary-500 to-tertiary-500 hover:bg-gradient-to-bl hover:from-primary-500 hover:to-primary-500 rounded-lg"
	>
		<div
			class="flex items-center justify-start w-full border-0 rounded-md bg-surface-800 hover:bg-primary-500 hover:text-black transition-all duration-150 ease-in"
		>
			<i class="bx bx-play text-3xl" aria-hidden="true" />
			<span class="btn py-2 ps-0">Live demo</span>
		</div>
	</a>
{/if}
