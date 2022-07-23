import create from "zustand";
import axios from "axios";

export const useChuckNorrisStore = create((set, get) => ({
  item: {},
  loading: false,
  randomQuote: async () => {
    set((state) => (state.loading = true));
    const res = await axios.get("https://api.chucknorris.io/jokes/random");

    set((state) => {
      state.item = res.data;
      state.loading = false;
    });
  },
}));
