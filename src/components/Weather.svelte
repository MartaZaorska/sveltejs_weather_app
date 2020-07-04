<script>
  import WeatherStore from "../store.js";
  import CityInfo from "./CityInfo.svelte";
  import WeatherItem from "./WeatherItem.svelte";
</script>

<style>
  .weather {
    padding: 0em 1em 0.5em 1em;
  }

  .weather__list {
    padding: 0em 0.2em 1em 0.2em;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .weather__list {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 992px) {
    .weather {
      width: 92%;
      margin: 0 auto;
    }
  }
</style>

<section class="weather">
  <CityInfo />
  <section class="weather__list">
    {#each $WeatherStore.weather.consolidated_weather as weather (weather.id)}
      <WeatherItem data={weather} />
    {/each}
  </section>
</section>
