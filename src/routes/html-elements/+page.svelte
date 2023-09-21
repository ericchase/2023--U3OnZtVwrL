<script>
  import ElementsRaw from '$lib/ElementsRaw.svelte';
  import ElementsReset from '$lib/ElementsReset.svelte';
</script>

<br />
<div class="row">
  <div class="col">
    Default CSS
    <ElementsRaw />
  </div>
  <div class="col">
    <a href="https://andy-bell.co.uk/a-more-modern-css-reset/">Modern CSS Reset</a>
    <ElementsReset />
  </div>
</div>

<style>
  .row {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .col {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }
</style>
