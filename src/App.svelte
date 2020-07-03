<script>
  import WeatherStore from "./store.js";
  import Search from "./components/Search.svelte";
  import Cities from "./components/Cities.svelte";
  import Weather from "./components/Weather.svelte";
  import Spinner from "./components/Spinner.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-display: fallback;
    background: #fdfdfd;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    color: #222;
  }
  :global(input),
  :global(button),
  :global(a),
  :global(input::placeholder) {
    background: transparent;
    font-family: inherit;
    text-decoration: none;
    border: 0;
    padding: 0;
    margin: 0;
    color: inherit;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  :global(input:active),
  :global(input:focus),
  :global(button:active),
  :global(button:focus),
  :global(a:active),
  :global(a:focus) {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  main {
    position: relative;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, #cfd9df 0%, #e2ebf0 100%);
  }

  .cities__message {
    text-align: center;
    margin-top: 3em;
    font-weight: 300;
    font-size: 1.3em;
    color: #344558;
  }

  @media screen and (min-width: 768px) {
    :global(body) {
      font-size: 14px;
    }

    .cities__message {
      font-size: 3em;
      text-align: left;
      padding: 0em 2em;
    }
  }
</style>

<main>
  <Search />
  {#if $WeatherStore.noCities}
    <p class="cities__message">City not found</p>
  {:else if $WeatherStore.loading}
    <Spinner />
  {:else if $WeatherStore.cities.length > 0}
    <Cities />
  {:else if Object.keys($WeatherStore.weather).length > 0}
    <Weather />
  {/if}
</main>
