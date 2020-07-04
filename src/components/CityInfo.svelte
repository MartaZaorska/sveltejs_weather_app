<script>
  import WeatherStore from "../store.js";
  import { getTimeString } from "../helper";
  let userCity = JSON.parse(localStorage.getItem("weather_app_mz")).userCity;
  const handleClick = () => {
    userCity = {
      woeid: $WeatherStore.weather.woeid,
      title: $WeatherStore.weather.title
    };
    localStorage.setItem("weather_app_mz", JSON.stringify({ userCity }));
  };
</script>

<style>
  .city_info {
    text-align: center;
    margin: 1.5em 0em;
    line-height: 1.5;
  }

  header {
    padding: 0.3em;
  }

  h3 {
    font-weight: 600;
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-weight: 300;
    font-size: 3.5em;
    color: #344558;
  }

  p {
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.8);
  }

  span.stripe {
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: rgba(0, 0, 0, 0.2);
    display: block;
    margin: 0em 0.5em;
  }

  button {
    width: 95%;
    margin-top: 1.5em;
    cursor: pointer;
    border-radius: 1em;
    padding: 0.7em 1.5em;
    background: #f43b47;
    color: #fff;
    font-weight: 600;
    font-size: 1.1em;
    opacity: 0.9;
    transition: all 0.1s;
  }

  button:hover {
    opacity: 1;
  }

  @media screen and (min-width: 576px) {
    button {
      width: auto;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1200px) {
    .city_info {
      text-align: left;
      padding-left: 1em;
      font-size: 16px;
    }

    h3 {
      font-size: 3.5em;
    }

    p {
      justify-content: flex-start;
      padding-left: 1em;
    }

    button {
      margin-left: 0.5em;
    }
  }
</style>

<section class="city_info">
  <header>
    <h3>{$WeatherStore.weather.title}, {$WeatherStore.weather.parent.title}</h3>
    <h1>{getTimeString($WeatherStore.weather.time)}</h1>
  </header>
  <p>
    <span>Sunrise {getTimeString($WeatherStore.weather.sun_rise)}</span>
    <span class="stripe" />
    <span>Sunset {getTimeString($WeatherStore.weather.sun_set)}</span>
  </p>
  {#if $WeatherStore.weather.woeid !== userCity.woeid}
    <button on:click={handleClick}>Set as your city</button>
  {/if}
</section>
