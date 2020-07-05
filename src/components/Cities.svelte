<script>
  import { fade } from "svelte/transition";
  import WeatherStore from "../store";
  import { fetchData } from "../helper.js";

  const handleClick = id => {
    WeatherStore.loadingData();

    fetchData(`/${id}`)
      .then(data => {
        WeatherStore.update(currStore => ({
          ...currStore,
          weather: data,
          loading: false
        }));
      })
      .catch(err => console.log(err));
  };

  if ($WeatherStore.cities.length === 1) {
    handleClick($WeatherStore.cities[0].woeid);
  }
</script>

<style>
  .cities {
    padding-top: 1.3em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cities__item {
    text-align: center;
    background: rgba(255, 255, 255, 0.25);
    width: 93%;
    padding: 1.2em 0em;
    box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);
    font-weight: 600;
    font-size: 1.2em;
    color: #999;
    border-radius: 1em;
    margin-bottom: 0.4em;
    transition: all 0.1s;
    cursor: pointer;
  }

  .cities__item:hover {
    color: #222;
    background: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 768px) {
    .cities {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      width: 90%;
      margin: 0 auto;
    }

    .cities__item {
      width: 46%;
      margin: 0.3em 2%;
    }
  }

  @media screen and (min-width: 992px) {
    .cities__item {
      width: 31%;
      margin: 0.3em 1%;
    }
  }
</style>

<section class="cities">
  {#each $WeatherStore.cities as city, index (city.woeid)}
    <button
      in:fade={{ delay: index * 40, duration: 220 }}
      class="cities__item"
      on:click={() => handleClick(city.woeid)}>
      {city.title}
    </button>
  {/each}
</section>
