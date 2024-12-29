<script lang="ts">
	import type { ProjectType } from '../../../../types/projectTypes';
	import Tag from '../Tag.svelte';

	export let project: ProjectType;
</script>

<a aria-live="polite" class="card-container" href={project.code}>
	<div>
		<img src={project.image} alt="project name" />
	</div>
	<div class="content">
		<h3>{project.title}</h3>
		<div class="tags">
			{#each project.tags as tag}
				<Tag name={tag.name} />
			{/each}
		</div>
	</div>
	<div class="overlay">
		<div>
			<p>{project.description}</p>
			<span class="arrow">Code &xrarr;</span>
		</div>
	</div>
</a>

<style>
	.card-container {
		position: relative;
		flex-grow: 1;
		flex-basis: 0;
		display: grid;
		grid-template-rows: auto 7rem;
		box-shadow: -0.1rem 0.1rem 0.4rem 0.1rem var(--shadow);
		overflow: hidden;
		transition: var(--smooth);
	}

	.card-container:hover {
		box-shadow: none;
	}

	.card-container:hover .overlay {
		opacity: 1;
		bottom: 0;
	}

	.overlay {
		position: absolute;
		background-color: var(--shadow);
		width: 100%;
		height: 45%;
		bottom: -7rem;
		overflow: hidden;
		opacity: 0;
		transition: var(--smooth);
	}

	.overlay p {
		position: absolute;
		bottom: 4rem;
		left: 1.5rem;
		right: 1.5rem;
		color: var(--dark);
	}

	.overlay .arrow {
		position: absolute;
		bottom: 1rem;
		right: 1.5rem;
		padding: 0.5rem 1.5rem;
		background-color: var(--accent);
		color: var(--light);
	}

	.card-container:hover .content {
		opacity: 0;
	}

	.card-container:hover img {
		filter: blur(2px) grayscale(100%);
	}

	.content {
		padding: 1rem 1.5rem;
		transition: var(--smooth);
	}

	img {
		width: 100%;
		display: block;
		transition: var(--smooth);
	}

	.tags {
		padding-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.5rem;
		row-gap: 0.5rem;
	}

	@media (550px <= width <= 610px) {
		.overlay {
			height: 50%;
		}
	}

	@media (width >= 750px) {
		.overlay {
			height: 40%;
		}
	}
</style>
