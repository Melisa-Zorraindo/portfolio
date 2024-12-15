<script lang="ts">
  import type { ProjectType } from "../../../../types/projectTypes";

  export let project: ProjectType;

  let isHovered:boolean = false;

  const handleMouseEnter = () => {
    isHovered = true;
  }

  const handleMouseLeave = () => {
    isHovered = false;
  }
</script>

<a
  aria-live="polite"
  class="card-container"
  href={project.code}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  >
  <h3>{project.title}</h3>
  <div>
    <img src={project.image} alt="project name"/>
  </div>
  <div class:content={isHovered}>
    <p class="description">{project.description}</p>
    <div class="tags">
      {#each project.tags as tag}
      <span>
        {tag.name}
      </span>
      {/each}
    </div>
  </div>
</a>


<style>
  .card-container {
    position: relative;
    border: 1px solid #ebebeb;
    padding-bottom: .5rem;
    margin-bottom: 3rem;
    flex-grow: 1;
    flex-basis: 0;
    display: grid;
    grid-template-rows: auto auto;
    background-color: #f7f7f7;
    transition: all .5s ease-out;
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
      min-width: 400px;
      max-width: 450px;
    }

  }
</style>