<script>
  import '$lib/index.css';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const mode = writable('light');
  onMount(() => {
    mode.subscribe((value) => {
      if (value === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    });
  });
</script>

<div class="row">
  <div class="row">
    <a href="/">Home</a>
    <div>( <a href="#" on:click={() => mode.set('dark')}>dark</a> <a href="#" on:click={() => mode.set('light')}>light</a> )</div>
  </div>
  <div>( <a href="#" on:click={() => mode.set('dark')}>dark</a> <a href="#" on:click={() => mode.set('light')}>light</a> )</div>
</div>
<slot />

<style>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
  }
</style>
