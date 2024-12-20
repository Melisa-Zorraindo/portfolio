<script lang="ts">
  import MainCard from "$lib/components/elements/cards/MainCard.svelte";
  import Tag from "$lib/components/elements/Tag.svelte";
  import type { ProjectType } from "../../types/projectTypes";

  export let data: { projects: ProjectType[] }
  const { projects } = data
</script>

<div class="wrapper">
  <div class="column-one">
    <section class="featured">
      <h1>Featured projects</h1>
      <div class="content">
        {#each  projects as project}
        {#if project.type === 'featured'}
        <MainCard {project}/>
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
  </div>
  <div class="column-two">
    <section class="about">
      <div>
        <h2>Where I worked</h2>
      <ul class="jobs">
        {#each projects as project}
          {#if project.type === 'job'}
          <li>
            <a href={project.website}>
              <h3>{project.company}
                <!-- insert icon here -->
                <span>&#x1F517;</span>
              </h3>
            </a>
            <h4>{project.title}</h4>
            <span>{project.startDate} - </span>
            <span>{project.endDate}</span>
            <p class="job-description">{project.description}</p>
            <div class="tags">
              {#each project.tags as tag}
              <Tag name={tag.name} />
              {/each}
            </div>
          </li>
          {/if}
          {/each}
        </ul>
      </div>
      <div>
        <h2>Tech I use</h2>
        <p>A paragraph or a list of technologies used in the projects I have contributed to.</p>
      </div>
    </section>
  </div>
</div>

<style>
  h1 {
    margin: 0.65rem 0;
  }

  h2 {
    margin: 0.8rem 0;
  }

  h3 {
    margin: 1rem 0 0;
  }

  section {
    padding: 0 2rem;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .jobs li {
    margin: 1rem 0 2rem;
  }

  .jobs li:last-child {
    margin-bottom: 0;
  }

  .job-description {
    margin: .75rem 0 .5rem;
  }

  .tags {
    padding-top: .5rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: .5rem;
    row-gap: .5rem;
  }

  @media (550px <= width <= 1032px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (width >= 800px) {
    .wrapper {
      margin-top: 4rem;
    }
  }

  @media (width >= 1032px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
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
      border-left: 1px solid black;
    }
	}

</style>