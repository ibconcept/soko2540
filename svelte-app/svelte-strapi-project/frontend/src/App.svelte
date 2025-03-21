<script>
  import ExampleComponent from './components/ExampleComponent.svelte';

  let title = 'Welcome to Svelte with Strapi!';

</script>

<main>
  <h1>{title}</h1>
  <ExampleComponent />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 2em;
  }
</style>