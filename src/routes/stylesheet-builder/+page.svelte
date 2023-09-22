<script lang="ts">
  import elements from '$lib/data/elements.json';
  import { onMount } from 'svelte';
  import { get, writable, type Writable } from 'svelte/store';

  let sheets: Writable<string>[] = [];
  for (const _ of elements) {
    sheets.push(writable(''));
  }

  onMount(() => {
    for (let i = 0; i < elements.length; ++i) {
      const elStyle = document.createElement('style');
      const head = document.head || document.getElementsByTagName('head')[0];
      head.appendChild(elStyle);
      const [tag] = elements[i];
      const storeSheet = sheets[i];
      elStyle.appendChild(document.createTextNode(`.transformed {${get(storeSheet)}}`));
      storeSheet.subscribe((css) => {
        if (elStyle.firstChild) {
          elStyle.replaceChild(document.createTextNode(`.transformed {${css}}`), elStyle.firstChild);
        }
      });
    }
  });

  function update(idx: number, evt: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
    sheets[idx].set(evt.currentTarget.value);
  }
  function keydown(evt: KeyboardEvent & { currentTarget: EventTarget & HTMLTextAreaElement }) {
    if (evt.key === 'Tab') {
      evt.preventDefault();
      let start = evt.currentTarget.selectionStart;
      let end = evt.currentTarget.selectionEnd;
      evt.currentTarget.value = evt.currentTarget.value.substring(0, start) + '  ' + evt.currentTarget.value.substring(end);
      evt.currentTarget.selectionStart = evt.currentTarget.selectionEnd = start + 2;
    }
  }
</script>

<div class="col gap fill-w">
  <br />
  <div class="grid gap">
    <div />
    <div class="row center">Default</div>
    <div />
    <div class="row center">Styled</div>
  </div>
  {#each elements as [tag, html], idx}
    <div class="grid gap">
      <div>{tag}</div>
      <div><div>{@html html}</div></div>
      <div><textarea on:input={(evt) => update(idx, evt)} on:keydown={keydown} /></div>
      <div><div class="transformed">{@html html}</div></div>
    </div>
  {/each}
</div>

<style>
  .col.fill-w {
    width: 100%;
  }

  .row.center {
    align-items: center;
    justify-content: center;
  }

  .gap {
    gap: 2px;
  }

  .grid {
    display: grid;
    grid-template-columns: 6em 1fr 1fr 1fr;
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
