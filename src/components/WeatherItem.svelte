<script>
  import { scale, fade } from "svelte/transition";
  import {
    getDateString,
    fixedNumber,
    mphToKmh,
    milesToKm
  } from "../helper.js";
  import { ICONS } from "../constants.js";
  export let data, index;
</script>

<style>
  .weather__item {
    background: #fafafa;
    border-radius: 1.5em;
    margin-bottom: 1.5em;
    padding: 1.2em;
    box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.15);
    font-size: 16px;
  }

  header {
    color: #344558;
  }

  .temp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5em 0em;
  }

  .temp h1 {
    font-size: 3.5em;
    font-weight: 300;
    color: #f43b47;
  }

  .temp i {
    font-size: 3.5em;
    opacity: 0.1;
  }

  .temp__range span {
    font-weight: 300;
    color: #344558;
  }

  .temp__range span.text--bold {
    font-weight: 600;
  }

  .indicator {
    margin: 0.8em 0em 0.5em 0em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .indicator p {
    width: 49%;
    text-align: center;
    padding: 0.3em;
    margin: 0.3em 0em;
  }

  .indicator p span {
    display: block;
    font-weight: 300;
    color: #777;
  }

  .indicator p span.text--bold {
    font-weight: 600;
    color: #344558;
  }

  @media screen and (min-width: 576px) {
    .indicator p {
      width: 24%;
    }
  }

  @media screen and (min-width: 768px) {
    .weather__item {
      width: 49%;
      font-size: 14px;
    }

    .indicator p {
      width: 49%;
    }
  }

  @media screen and (min-width: 1200px) {
    .weather__item {
      width: 32%;
    }
  }
</style>

<section class="weather__item" in:scale={{ delay: 100 * index, duration: 350 }}>
  <header>
    <h3>{getDateString(data.applicable_date)}</h3>
  </header>
  <div class="temp">
    <h1>{fixedNumber(data.the_temp)}&deg;</h1>
    <i class={ICONS[data.weather_state_abbr]} />
  </div>
  <p class="temp__range">
    <span>{data.weather_state_name}</span>
    <span class="text--bold">
      {fixedNumber(data.min_temp)}&deg; / {fixedNumber(data.max_temp)}&deg;
    </span>
  </p>
  <div class="indicator">
    <p>
      <span>Air pressure</span>
      <span class="text--bold">{data.air_pressure} hPa</span>
    </p>
    <p>
      <span>Humidity</span>
      <span class="text--bold">{data.humidity}%</span>
    </p>
    <p>
      <span>Wind speed</span>
      <span class="text--bold">{mphToKmh(data.wind_speed)} km/h</span>
    </p>
    <p>
      <span>Visibility</span>
      <span class="text--bold">{milesToKm(data.visibility)} km</span>
    </p>
  </div>
</section>
