<script lang="ts">
  import MainCard from "$lib/components/elements/cards/MainCard.svelte";
  import SecondaryCard from "$lib/components/elements/cards/SecondaryCard.svelte";
  import type { ProjectType } from "../../types/projectTypes";

  export let data: { projects: ProjectType[] }
  const { projects } = data

  const tech = ['SvelteKit', 'React', 'TypeScript', 'JavaScript', 'Tailwind', 'Bootstrap', 'API']
</script>

<div class="wrapper">
  <section class="featured">
    <h1 class="title">Featured projects</h1>
    <div class="content">
      {#each  projects as project}
        {#if project.type === 'featured'}
          <MainCard {project}/>
        {/if}
      {/each}
    </div>
  </section>
  <section class="other">
    <h2 class="title">Other creations</h2>
    <div class="content">
      {#each projects as project}
        {#if project.type === 'more'}
          <SecondaryCard {project} />
        {/if}
    {/each}
    </div>
  </section>
  <section class="quick">
    <h2 class="title">Quick builds</h2>
    <div class="content">
      {#each projects as project}
      {#if project.type === 'small'}
        <SecondaryCard {project} />
      {/if}
    {/each}
    </div>
    </section>
  <section class="about">
    <div>
      <h2 class="title">Tech I use</h2>
      <p>A paragraph or a list of technologies used in the projects I have contributed to.</p>
    </div>
    <div>
      <h2 class="title">Resume</h2>
      <ul>
        <li>
          <h3>eLoaded</h3>
          <p>Quick overview of what I've done</p>
          <span>Tech that I've used here</span>
          <a href="/">Link to their website</a>
        </li>
        <li>
          <h3>Network Perception</h3>
          <p>Quick overview of what I've done</p>
          <span>Tech that I've used here</span>
          <a href="/">Link to their website</a>
        </li>
      </ul>
    </div>
  </section>
</div>

<style>
  .featured h1 {
    margin-bottom: 3rem;
  }

  h2, h3 {
    margin-bottom: 2rem;
  }

  section {
    padding: 0 2rem;
  }

  @media (500px <= width <= 1299px) {
    .content {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
  }
  }

  @media (width >= 1300px) {
   .wrapper {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

   .featured {
    grid-area: 1 / 1 / 2 / 4;
  }

  .other {
    grid-area: 2 / 1 / 3 / 4;
  }

  .quick {
    grid-area: 3 / 1 / 4 / 4;
  }

  .about {
    grid-area: 1 / 4 / 4 / 5;
    border-left: 1px solid black;
  }
	}

</style>