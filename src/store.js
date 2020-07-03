import { writable } from "svelte/store";

const customWritable = (initialState) => {
  const store = writable(initialState);
  const { set, subscribe, update } = store;
  return {
    set,
    subscribe,
    update,
    loadingData: () => {
      set({
        ...initialState,
        loading: true,
      });
    },
  };
};

export default customWritable({
  weather: {},
  cities: [],
  loading: false,
  noCities: false,
});
