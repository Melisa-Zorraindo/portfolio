<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">logo</svelte:fragment>
	<svelte:fragment slot="trail"
		><nav>
			<ul class="flex justify-end gap-2">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav></svelte:fragment
	>
</AppBar>
