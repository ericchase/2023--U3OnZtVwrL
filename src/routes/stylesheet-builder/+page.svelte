<script lang="ts">
  import elements from '$lib/data/elements.json';
  import { writable, type Writable } from 'svelte/store';

  let sheets: Writable<string>[] = [];
  for (const _ of elements) {
    sheets.push(writable(''));
  }
  for (const sheet of sheets) {
    sheet.subscribe((value) => {
      console.log(value);
    });
  }

  function update(idx: number, evt: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
    sheets[idx].set(evt.currentTarget.value);
  }
</script>

<div class="col gap">
  <br />
  <div class="grid gap">
    <div />
    <div class="row">Default</div>
    <div />
    <div class="row">Styled</div>
  </div>
  {#each elements as [tag, html], idx}
    <div class="grid gap">
      <div>{tag}</div>
      <div><div>{@html html}</div></div>
      <div><textarea on:input={(evt) => update(idx, evt)} /></div>
      <div><div>{@html html}</div></div>
    </div>
  {/each}
</div>

<style>
  .col {
    width: 100%;
  }

  .row {
    align-items: center;
    justify-content: center;
  }

  .gap {
    gap: 2px;
  }

  .grid {
    display: grid;
    grid-template-columns: 6em 1fr 0fr 1fr;
    & > div {
      background-color: var(--color-1);
      height: 100%;
      width: 100%;
    }
  }

  .grid > :nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .grid > :nth-child(2),
  .grid > :nth-child(4) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1em;
    min-width: 10em;
    & > div {
      background-color: var(--color-2);
    }
  }

  .grid > :nth-child(3) {
    min-width: 15em;
    & textarea {
      box-sizing: border-box;
      resize: vertical;
      height: 100%;
      width: 100%;
    }
  }

  :global(.grid canvas) {
    border: 1px solid var(--color-1a);
    width: 100%;
  }
  :global(.grid :is(iframe, svg, video)) {
    width: 100%;
  }
</style>
