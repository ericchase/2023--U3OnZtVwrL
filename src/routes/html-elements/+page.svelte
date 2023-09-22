<script>
  import ElementsList from '$lib/ElementsList.svelte';
</script>

<br />
<div class="row">
  <div class="col">
    Default CSS
    <div class="wrapper">
      <ElementsList />
    </div>
  </div>
  <div class="col">
    <a class="link" href="https://necolas.github.io/normalize.css/">normalize.css</a>
    <div class="wrapper normalize">
      <ElementsList />
    </div>
  </div>
  <div class="col">
    <a class="link" href="https://andy-bell.co.uk/a-more-modern-css-reset/">Modern CSS Reset</a>
    <div class="wrapper reset">
      <ElementsList />
    </div>
  </div>
</div>

<style>
  .row {
    gap: 1em;
  }
  .col {
    gap: 1em;
    width: 100%;
  }
</style>
