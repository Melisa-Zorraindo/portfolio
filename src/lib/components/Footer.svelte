<script lang="ts">
	const date: Date = new Date();
	const year: number = date.getFullYear();
</script>

<footer class="flex flex-wrap justify-between items-center p-2 bg-surface-100 dark:bg-surface-800">
	<div class="">
		logo here
		<span>Melisa Zorraindo © {year}</span>
	</div>
	<div class="flex gap-2">
		<a href="/">
			<box-icon type="logo" name="linkedin-square" size="md" color="#fff" />
		</a>
		<a href="/"><box-icon type="logo" name="github" size="md" color="#fff" /></a>
		<a href="/"><box-icon type="logo" name="codepen" size="md" color="#fff" /></a>
	</div>
</footer>
