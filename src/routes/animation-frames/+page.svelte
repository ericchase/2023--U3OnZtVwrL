<script lang="ts">
  import { onMount } from 'svelte';

  let l200 = 0;
  let l20 = 0;
  let l2 = 0;

  onMount(() => {
    let timestamp200 = 0;
    let timestamp20 = 0;
    let timestamp2 = 0;
    function step(timestamp: number) {
      if (timestamp200 < timestamp) {
        timestamp200 = timestamp + 200;
        l200 += 10;
        if (l200 === 400) l200 = 0;
      }
      if (timestamp20 < timestamp) {
        timestamp20 = timestamp + 20;
        l20 += 10;
        if (l20 === 400) l20 = 0;
      }
      if (timestamp2 < timestamp) {
        timestamp2 = timestamp + 2;
        l2 += 10;
        if (l2 === 400) l2 = 0;
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  });
</script>

<div class="ball" style:left="{l200}px">200ms</div>
<div class="ball" style:left="{l20}px">20ms</div>
<div class="ball" style:left="{l2}px">2ms</div>

<style>
  .ball {
    position: relative;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 100%;
    height: 4em;
    width: 4em;
    margin: 1em;
    text-align: center;
  }
</style>
