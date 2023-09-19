<script lang="ts">
  import { addListener, pause, start } from '$lib/request-animation-frame';
  import { onMount } from 'svelte';

  let l200 = 0;
  let l20 = 0;
  let l2 = 0;

  let count200 = 0;
  let count20 = 0;
  let count2 = 0;

  onMount(() => {
    addListener({
      delay: 60 * 30,
      callback: () => {
        l200 += 10 * 30;
        if (l200 > 400) l200 = l200 - 400;
        ++count200;
      }
    });
    addListener({
      delay: 60 * 10,
      callback: () => {
        l20 += 10 * 10;
        if (l20 > 400) l20 = l20 - 400;
        ++count20;
      }
    });
    addListener({
      delay: 60 * 1,
      callback: () => {
        l2 += 10 * 1;
        if (l2 > 400) l2 = l2 - 400;
        ++count2;
      }
    });
    // start(window);
  });
</script>

<div class="ball" style:left="{l200}px">200ms</div>
<div class="ball" style:left="{l20}px">20ms</div>
<div class="ball" style:left="{l2}px">2ms</div>

<div>{count200} {count20} {count2}</div>
<button on:click={() => pause()}>Pause</button>

<style>
  .ball {
    position: relative;
    background-color: blue;
    color: white;
    border: none;
    /* border-radius: 100%; */
    height: 4em;
    width: 4em;
    margin: 2px;
    text-align: center;
  }
</style>
