<script lang="ts">
  import { addListener, pause, start } from '$lib/request-animation-frame';
  import { onMount } from 'svelte';

  let left1 = 0;
  let left2 = 0;
  let left3 = 0;

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  let multiplyer1 = 30;
  let multiplyer2 = 10;
  let multiplyer3 = 1;

  onMount(() => {
    addListener({
      delay: 60 * multiplyer1,
      callback: () => {
        left1 += 10 * multiplyer1;
        if (left1 > 400) left1 = left1 - 400;
        ++count1;
      }
    });
    addListener({
      delay: 60 * multiplyer2,
      callback: () => {
        left2 += 10 * multiplyer2;
        if (left2 > 400) left2 = left2 - 400;
        ++count2;
      }
    });
    addListener({
      delay: 60 * multiplyer3,
      callback: () => {
        left3 += 10 * multiplyer3;
        if (left3 > 400) left3 = left3 - 400;
        ++count3;
      }
    });
    start(window);
  });

  let running = true;
</script>

<div class="ball" style:left="{left1}px">{60 * multiplyer1}ms</div>
<div class="ball" style:left="{left2}px">{60 * multiplyer2}ms</div>
<div class="ball" style:left="{left3}px">{60 * multiplyer3}ms</div>

<div>Frame Count</div>
<div>1: {count1}</div>
<div>2: {count2}</div>
<div>3: {count3}</div>

<button
  on:click={() => {
    running = !running;
    pause();
  }}>{running ? 'Pause' : 'Unpause'}</button
>

<style>
  .ball {
    position: relative;
    background-color: blue;
    color: white;
    border: none;
    height: 4em;
    width: 4em;
    margin: 2px;
    text-align: center;
  }
</style>
