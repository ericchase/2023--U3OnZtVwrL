<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import '$lib/index.css';
  import '$lib/normalize.css';
  import '$lib/reset.css';

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
    <a class="site" href="{base}/">Home</a>
    <div>( <a class="site" href="#" on:click={() => mode.set('dark')}>dark</a> <a class="site" href="#" on:click={() => mode.set('light')}>light</a> )</div>
  </div>
  <div>( <a class="site" href="#" on:click={() => mode.set('dark')}>dark</a> <a class="site" href="#" on:click={() => mode.set('light')}>light</a> )</div>
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
