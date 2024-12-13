<script lang="ts">
  import type { ProjectType } from "../../../../types/projectTypes";
  import SecondaryButton from "../buttons/SecondaryButton.svelte";

  export let project: ProjectType;

  let isHovered:boolean = false;

  const handleMouseEnter = () => {
    isHovered = true;
  }

  const handleMouseLeave = () => {
    isHovered = false;
  }
</script>

<div role="note" aria-live="polite" class="card-container" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
  <h3>{project.title}</h3>
  <div>
    <img src={project.image} alt="project name"/>
  </div>
  <div
    class="content"
  >
    {#if !isHovered}
      <p class="description">{project.description}</p>
    {:else}
      <p class="description">{project.tags}</p>
    {/if}
    <div class="btn-container">
      <SecondaryButton url={project.code} text="Check code" target="_blank" />
    </div>
  </div>
</div>


<style>
  .card-container {
    position: relative;
    border: 1px solid #ebebeb;
    padding-bottom: .5rem;
    margin-bottom: 3rem;
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
  }

  h3 {
    position: absolute;
    margin: 0 -1px;
    padding: .75rem 1.5rem;
    border: 1px solid #ebebeb;
    top: -1.5rem;
    background-color: #f7f7f7;
  }

  img {
    width: 100%;
    display: block;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 1.5rem .5rem;
    gap: .5rem
  }

  .description {
    padding: 1rem 1.5rem;
    text-align: left;
    flex: 1;
  }

  @media (width >= 410px) {
    .card-container {
    min-width: 400px;
    max-width: 450px;
  }

  }
</style>