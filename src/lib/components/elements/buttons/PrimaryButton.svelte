<script lang="ts">
  export let url: string;
  export let text: string;
  export let target: string;
</script>

<a href={url} class="corner-border" target={target}>
	<span>{text}</span>
</a>

<style>
  .corner-border {
    background-color: var(--accent);
    color: var(--light);
    position: relative;
    display: inline-block;
    padding: .7rem 1.5rem;
    text-decoration: none;
  }

  .corner-border:hover {
    background-color: transparent;
    color: var(--accent);
    transition: all .3s ease-in-out;
  }

  .corner-border::before,
  .corner-border::after {
    content: '';
    position: absolute;
    background-color: var(--accent);
    transition: all .5s ease-in-out;
  }

  .corner-border::before {
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
  }

  .corner-border span::before,
  .corner-border span::after {
    content: '';
    position: absolute;
    background-color: var(--accent);
    width: 1px;
    height: 0;
    transition: all .5s ease-in-out;
  }

  .corner-border span::before {
    top: 0;
    left: 0;
  }

  .corner-border::after {
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
  }

  .corner-border span::after {
    bottom: 0;
    right: 0;
  }

  .corner-border:hover::before {
    width: 100%;
  }

  .corner-border:hover span::before {
    height: 100%;
  }

  .corner-border:hover::after {
    width: 100%;
  }

  .corner-border:hover span::after {
    height: 100%;
  }
</style>