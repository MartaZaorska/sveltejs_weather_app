<script>
  import WeatherStore from "../store.js";
  import { fetchData } from "../helper.js";
  let city = "";

  const handleSubmit = e => {
    if (city === "") {
      return;
    }

    WeatherStore.loadingData();

    fetchData(`/search/?query=${city}`)
      .then(data => {
        WeatherStore.update(currStore => {
          return {
            ...currStore,
            loading: false,
            cities: data,
            noCities: data.length === 0 ? true : false
          };
        });
      })
      .catch(err => console.log(err));
  };
</script>

<style>
  form {
    display: flex;
    width: 100%;
    height: 75px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .form__control {
    width: 80%;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0em 1.2em;
    background: rgba(255, 255, 255, 0.65);
    border-bottom-left-radius: 1.3em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .form__control input {
    margin-left: 0.1em;
    padding: 0.7em;
    font-size: 1.1em;
  }

  .form__control input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  .form__control i {
    font-size: 1.9em;
    opacity: 0.7;
    margin-left: 0.2em;
    color: rgba(0, 0, 0, 0.8);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    background: #f43b47;
    border-bottom-left-radius: 1.5em;
    opacity: 0.9;
    transition: all 0.1s;
  }

  button:hover {
    opacity: 1;
  }

  button i {
    font-size: 1.6em;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .form__control input {
      min-width: 80%;
    }
  }

  @media screen and (min-width: 992px) {
    form {
      justify-content: flex-end;
    }

    .form__control {
      width: 30%;
    }

    button {
      width: 8%;
    }
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form__control">
    <i class="fas fa-globe-europe" />
    <input type="text" bind:value={city} placeholder="City" />
  </div>
  <button type="submit">
    <i class="fas fa-search" />
  </button>
</form>
