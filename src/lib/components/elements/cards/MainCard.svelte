<script lang="ts">
  import type { ProjectType } from "../../../../types/projectTypes";
  import Tag from "../Tag.svelte";

  export let project: ProjectType;
</script>

<a
  aria-live="polite"
  class="card-container"
  href={project.code}
  >
  <div>
    <img src={project.image} alt="project name"/>
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
    box-shadow: -0.1rem .1rem .4rem .1rem rgba(53, 53, 53, .1);
    overflow: hidden;
    transition: all .5s ease-in-out;
  }

  .card-container:hover {
    box-shadow: none;
  }

  .card-container:hover .overlay{
    opacity: 1;
    transform: scale(1);
  }

  .overlay{
    position: absolute;
    background-color: rgba(53, 53, 53, .1);
    width: 100%;
    height: 100%;
    bottom: 0;
    transform: scale(1.3);
    opacity: 0;
    transition: all .5s ease-in-out;
  }

  .overlay p {
    position: absolute;
    bottom: 4rem;
    left: 1.5rem;
    right: 1.5rem;
    color: #000;
  }

  .overlay .arrow {
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    padding: .5rem 1.5rem;
    background-color: #e00668;
    color: #fff;
  }

  .card-container:hover .content {
    opacity: 0;
  }

  .card-container:hover img {
    filter: blur(2px) grayscale(100%);
  }

  .content {
    padding: 1rem 1.5rem;
    transition: all .5s ease-in-out;
  }

  img {
    width: 100%;
    display: block;
    transition: all .5s ease-in-out;
  }

  .tags {
    padding-top: .5rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: .5rem;
    row-gap: .5rem;
  }
</style>