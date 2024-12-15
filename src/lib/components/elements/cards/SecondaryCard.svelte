<script lang="ts">
  import type { ProjectType } from "../../../../types/projectTypes";
  import SecondaryButton from "../buttons/SecondaryButton.svelte";

  export let project: ProjectType;
</script>

<div class="card-container">
  <h3>{project.title}</h3>
  <div>
    <img src={project.image} alt="project name"/>
  </div>
  <p class="description">{project.description}</p>
  <div class="tags">
    {#each project.tags as tag}
    <span>
      {tag.name}
    </span>
    {/each}
  </div>
</div>

<style>
  .card-container {
    border: 1px solid #ebebeb;
    padding-bottom: .5rem;
    margin-bottom: 3rem;
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0 -1px;
    padding: .75rem 1.5rem;
    border: 1px solid #ebebeb;
    border-top: 0;
    background-color: #fbfbfb;
  }

  img {
    width: 100%;
    display: block;
  }

  .description {
    padding: 1rem 1.5rem;
    text-align: left;
    flex: 1;
  }

  .tags {
    padding: 1rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: .5rem;
    color: rebeccapurple;
  }

  @media (width >= 500px) {
    .card-container {
      min-width: 300px;
      max-width: 350px;
    }
}
</style>