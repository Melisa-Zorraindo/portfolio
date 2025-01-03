<script lang="ts">
	import { fly } from 'svelte/transition';
	import MainCard from '$lib/components/elements/cards/MainCard.svelte';
	import Tag from '$lib/components/elements/Tag.svelte';
	import type { ProjectType } from '../../types/projectTypes';

	export let data: { projects: ProjectType[] };
	const jobs = data.projects.filter((project) => project.type === 'job');
	let { projects } = data;

	let searchContainer: boolean = false;

	const handleSearch = (e: KeyboardEvent) => {
		if (e.target) {
			searchContainer = true;
		}

		if ((e.target as HTMLInputElement).value === '') {
			searchContainer = false;
			projects = data.projects;
		}

		const searchValue: string = (e.target as HTMLInputElement).value.toLowerCase();

		projects = projects.filter((project) => {
			return (
				project.type !== 'job' &&
				(project.title.toLowerCase().includes(searchValue) ||
					project.description.toLowerCase().includes(searchValue) ||
					project.tags.some((tag) => tag.name.toLowerCase().includes(searchValue)))
			);
		});
	};
</script>

<svelte:head>
	<title>Melisa's portfolio · Projects</title>
</svelte:head>

<div class="wrapper" in:fly={{ y: 200, duration: 1000 }}>
	<div class="column-one">
		<div class="search-container">
			<input
				class="search"
				type="text"
				name=""
				id=""
				placeholder="Search..."
				onkeyup={handleSearch}
			/>
		</div>
		{#if searchContainer}
			<section class="search-results">
				<h2>Search results</h2>
				{#if !projects.length}
					<p>Your search didn't match any projects.</p>
				{/if}
				<div class="content">
					{#each projects as project}
						<MainCard {project} />
					{/each}
				</div>
			</section>
		{:else}
			<section class="featured">
				<h1>Featured projects</h1>
				<div class="content">
					{#each projects as project}
						{#if project.type === 'featured'}
							<MainCard {project} />
						{/if}
					{/each}
				</div>
			</section>
			<section class="other">
				<h2>Other creations</h2>
				<div class="content">
					{#each projects as project}
						{#if project.type === 'more'}
							<MainCard {project} />
						{/if}
					{/each}
				</div>
			</section>
			<section class="quick">
				<h2>Quick builds</h2>
				<div class="content">
					{#each projects as project}
						{#if project.type === 'small'}
							<MainCard {project} />
						{/if}
					{/each}
				</div>
			</section>
		{/if}
	</div>
	<div class="column-two">
		<section class="about">
			<div>
				<h2 class="cv-title">Where I worked</h2>
				<ul class="jobs">
					{#each jobs as job}
						<li>
							<a href={job.website} target="_blank" rel="noopener noreferrer">
								<h3>{job.company}</h3>
							</a>
							<h4>{job.title}</h4>
							<span>{job.startDate} - </span>
							<span>{job.endDate}</span>
							<p class="job-description">{job.description}</p>
							<div class="tags">
								{#each job.tags as tag}
									<Tag name={tag.name} />
								{/each}
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2>Tech I use</h2>
				<ul class="tech">
					<li><i class="tech-icon node"></i></li>
					<li><i class="tech-icon javascript"></i></li>
					<li><i class="tech-icon mocha"></i></li>
					<li><i class="tech-icon java"></i></li>
					<li><i class="tech-icon spring"></i></li>
					<li><i class="tech-icon mongo"></i></li>
					<li><i class="tech-icon docker"></i></li>
					<li><i class="tech-icon mysql"></i></li>
					<li><i class="tech-icon typescript"></i></li>
					<li><i class="tech-icon sveltekit"></i></li>
					<li><i class="tech-icon react"></i></li>
				</ul>
			</div>
		</section>
	</div>
</div>

<style>
	h1,
	h2,
	h3 {
		margin: 1rem 0;
	}

	section {
		padding: 0 2rem;
	}

	.search-container {
		padding: 0 2rem;
		margin-bottom: 3rem;
	}

	.search {
		border: none;
		border-bottom: var(--border-line);
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		width: 100%;
		color: inherit;
		height: 2rem;
		padding-left: 0.5rem;
	}

	.search:focus {
		outline: 1px solid var(--accent);
	}

	.content {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.about {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.jobs li {
		margin: 1rem 0 2rem;
	}

	.jobs li:last-child {
		margin-bottom: 0;
	}

	.jobs li a {
		text-decoration: underline;
		color: var(--accent);
	}

	.jobs li a h3 {
		margin-bottom: 0.3rem;
	}

	.jobs span {
		font-size: 0.8rem;
	}

	.job-description {
		margin: 0.75rem 0 0;
	}

	.tags {
		padding-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.5rem;
		row-gap: 0.5rem;
	}

	.tech {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	.tech-icon {
		display: inline-block;
		height: 2rem;
		width: 2rem;
	}

	.node {
		background: no-repeat center/cover url('/icons/nodejs.svg');
	}

	.javascript {
		background: no-repeat center/cover url('/icons/javascript.svg');
	}

	.mocha {
		background: no-repeat center/cover url('/icons/mocha.svg');
	}

	.java {
		background: no-repeat center/cover url('/icons/java.svg');
	}

	.spring {
		background: no-repeat center/cover url('/icons/spring.svg');
	}

	.mongo {
		background: no-repeat center/cover url('/icons/mongodb.svg');
	}

	.docker {
		background: no-repeat center/cover url('/icons/docker.svg');
	}

	.mysql {
		background: no-repeat center/cover url('/icons/mysql.svg');
	}

	.typescript {
		background: no-repeat center/cover url('/icons/typescript.svg');
	}

	.sveltekit {
		background: no-repeat center/cover url('/icons/sveltekit.svg');
	}

	.react {
		background: no-repeat center/cover url('/icons/react.svg');
	}

	@media (550px <= width <= 1032px) {
		.content {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	@media (width >= 700px) {
		.wrapper {
			margin-top: 4rem;
		}

		.search-container {
			width: 680px;
		}
	}

	@media (width >= 1032px) {
		.content {
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
		}

		.featured .content {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}
	}

	@media (width >= 1290px) {
		.wrapper {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr;
		}

		.column-one {
			grid-area: 1 / 1 / 2 / 4;
		}

		.column-two {
			grid-area: 1 / 4 / 2 / 5;
		}

		.about {
			border-left: var(--border-line);
		}

		.cv-title {
			margin: 0;
		}
	}
</style>
