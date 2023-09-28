import { defineStore } from "pinia";
import axios from "axios";

export const useDataGraph = defineStore("GraphData", {
  state: () => ({
    url: "http://172.18.100.67:8000/map-routes/",
  }),

  actions: {

    async getMap() {
      try {
        const data = await fetch(this.url);
        const response = await data.json();

        return response;
      } catch (error) {
        console.log(error);
        return [{}]
      }
    },
    
  },
});
