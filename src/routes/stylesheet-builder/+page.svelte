<script>
  import tags from '$lib/data/tags.json';
</script>

<br />
<div class="col">
  <div class="grid center">
    <div />
    <div>Default</div>
    <div />
    <div>Styled</div>
  </div>
  {#each tags as tag}
    <div class="grid">
      <div>{tag}:</div>
      <div class="layout-block row">{@html `<${tag}>${tag}</${tag}>`}</div>
      <textarea />
      <div class="layout-block row">{@html `<${tag}>${tag}</${tag}>`}</div>
    </div>
  {/each}
</div>

<style>
  .row {
    gap: 1em;
  }
  .col {
    gap: 1em;
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 5em 1fr 1fr 1fr;
    gap: 1em;
    align-items: center;
  }
  .grid.center {
    justify-items: center;
  }
  .grid > textarea {
    box-sizing: border-box;
    resize: vertical;
    width: 100%;
  }

  .layout-block {
    background-color: var(--color-1);
    padding: 0.5em;
    justify-content: center;
  }
  .layout-block > div {
    background-color: var(--color-2);
  }
  .layout-space {
    background-color: var(--color-1);
    box-sizing: border-box;
    font-variant: small-caps;
    min-height: 0.5em;
    padding-left: 0.5em;
  }
</style>
