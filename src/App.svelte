<script lang="ts">
  import { onMount } from "svelte";
  import Time from './lib/Time.svelte'
  import Shell from './lib/ShellIdentifier.svelte'
  import ConsoleMessage from './lib/ConsoleMessage.svelte';

  let userText: string = "";
  let animation: boolean = false;


  onMount(() => {
    const message = document.querySelector('.typewriter')

    setTimeout(() => {
      animation = true
      message?.classList.remove('typewriter')
    }, 3500)
  })

  function handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    userText = input.value;
  }

</script>

<main>
  <div class="typewriter">
    <Time />
    <Shell />
    $
    <ConsoleMessage />
  </div>

{#if animation}
  <p>
    <Time />
    <Shell />
    $ {userText}
    <span class="cursor">|</span>
    <input
      type="text"
      on:input={handleInput}
      class="hidden-input"
      bind:value={userText}
      autofocus
    />
  </p>
{/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    color: #cdcdcd;
  }

  .typewriter {
    overflow: hidden;
    border-right: .15em solid #cdcdcd;
    white-space: nowrap;
    width: 100;
    animation: typing 3.5s steps(30, end) forwards;
  }

  @keyframes typing {
    from { width: 36% } /* Ignores <Time /> and <Shell /> in animation */
    to { width: 100% }
  }

  .cursor {
    animation: blink 0.7s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .hidden-input {
    opacity: 0;
    pointer-events: none;
  }
</style>

