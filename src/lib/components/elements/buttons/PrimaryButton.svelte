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
    background-color: black;
    color: white;
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
  }

  .corner-border:hover {
    background-color: transparent;
    color: black;
    transition: all .2s ease-in-out;
  }

  .corner-border::before,
  .corner-border::after {
    content: '';
    position: absolute;
    background-color: #000;
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
    background-color: #000;
    width: 1px;
    height: 0;
    transition: all .6s ease-in-out;
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
    width: 110%;
  }

  .corner-border:hover span::before {
    height: 120%;
  }

  .corner-border:hover::after {
    width: 110%;
  }

  .corner-border:hover span::after {
    height: 120%;
  }
</style>