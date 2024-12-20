<script lang="ts">
  import type { ProjectType } from "../../../../types/projectTypes";

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
      <span>
        {tag.name}
      </span>
      {/each}
    </div>
  </div>
  <div class="overlay">
    <div>
      <p>{project.description}</p>
      <span>Code</span>
      <span class="arrow">&xrarr;</span>
    </div>
  </div>
</a>


<style>
  .card-container {
    position: relative;
    border: 1px solid #ebebeb;
    padding-bottom: .5rem;
    flex-grow: 1;
    flex-basis: 0;
    display: grid;
    grid-template-rows: auto auto;
    background-color: #f7f7f7;
    overflow: hidden;
  }

  .card-container:hover .overlay{
    opacity: 1;
    transform: scale(1);
  }

  .overlay{
    position: absolute;
    background-color: rgba(53, 53, 53, 0.9);
    width: 100%;
    height: 100%;
    top: 0;
    transform: scale(1.3);
    opacity: 0;
    transition: all .5s ease-in-out;
  }

  .overlay div {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-15%, -50%);
    color: #fff;
  }

  .overlay p {
    margin-bottom: 2rem;
  }

  .overlay .arrow {
    padding: .5rem;
    background-color: rebeccapurple;
    border-radius: 50%;
  }

  .card-container:hover img,
  .card-container:hover .content {
    opacity: 0;
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

  .tags span {
    padding: .08rem .5rem;
    background-color: rgb(102, 51, 153, .1);
    font-size: .8rem;
  }
</style>