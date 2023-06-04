<script lang="ts">
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import SecondaryButton from './buttons/SecondaryButton.svelte';
</script>

<div class="flex m-4 border border-primary-500 rounded">
	<div class="bg-primary-800/50 w-64 p-4">
		<img src="/project-images/auction.png" alt="" class="pt-3 pb-1.5 mb-1" />
		<div class="flex flex-wrap gap-1">
			<span class="chip variant-filled-secondary px-2 py-0"
				><i class="bx bxl-html5 text-lg pe-1" />HTML</span
			>
			<span class="chip variant-filled-secondary px-2 py-0"
				><i class="bx bxl-bootstrap text-lg pe-1" />Bootstrap</span
			>
			<span class="chip variant-filled-secondary px-2 py-0"
				><i class="bx bxl-javascript text-lg pe-1" />JavaScript</span
			>
		</div>
	</div>
	<div class="card w-80 rounded-none rounded-e">
		<header class="card-header">
			<h3 class="h3 font-semibold pt-2">Auction House Website</h3>
		</header>
		<section class="px-4 py-6">
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequuntur natus.
				Adipisci, atque cum non tempore officia dolore ipsam! Minus quidem, atque debitis eos
				provident deserunt eaque enim modi doloremque.
			</p>
		</section>
		<footer class="card-footer flex flex-wrap gap-2"><PrimaryButton /><SecondaryButton /></footer>
	</div>
</div>
