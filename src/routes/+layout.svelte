<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import '$lib/index.css';
  import '$lib/normalize.css';
  import '$lib/reset.css';

  const theme = writable('light');
  onMount(() => {
    theme.subscribe((value) => {
      if (value === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    });
  });
  function mode(key: string) {
    return () => theme.set(key);
  }
</script>

<div class="grid">
  <a class="link" href="{base}/">Home</a>
  {#each { length: 2 } as _}
    <div class="row">
      ({#each ['light', 'dark'] as key}<a class="link" href="#" on:click={mode(key)}>{key}</a>{/each})
    </div>
  {/each}
</div>
<div class="pad">
  <slot />
</div>

<style>
  .grid {
    background-color: var(--color-2);
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    gap: 1em;
    position: sticky;
    top: 0;
    padding: 1em;
  }
  .grid > * {
    min-inline-size: max-content;
  }
  .row {
    gap: 1ch;
  }
  @media screen and (max-width: 600px) {
    /* .grid {
      grid-template-columns: 1fr max-content;
    } */
    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap-reverse;
      justify-content: space-between;
    }
    .grid > :nth-child(2) {
      display: none;
    }
  }
  .pad {
    padding: 1em;
    padding-top: 0;
  }
</style>
