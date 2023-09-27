import { defineStore } from "pinia";
import axios from "axios";

export const useDataGraph = defineStore("GraphData", {
  state: () => ({
    url: "http://172.18.100.67:8000/map-routes/",
  }),

  actions: {

    async getMap() {
      try {
        return {
          "ubicaciones": [
            {
              "nombre": "CLO",
              "posX": -70,
              "posY": 10
            },
            {
              "nombre": "BOG",
              "posX": -70,
              "posY": 40
            },
            {
              "nombre": "MAD",
              "posX": 10,
              "posY": 80
            },
            {
              "nombre": "BCN",
              "posX": 70,
              "posY": 110
            },
            {
              "nombre": "IBZ",
              "posX": 60,
              "posY": 50
            },
            {
              "nombre": "ZAZ",
              "posX": 100,
              "posY": 70
            }
          ],
          "conexiones": [
            {
              "ubicacion1": "CLO",
              "ubicacion2": "BOG",
              "peso": 30
            },
            {
              "ubicacion1": "BOG",
              "ubicacion2": "MAD",
              "peso": 210
            },
            {
              "ubicacion1": "MAD",
              "ubicacion2": "BCN",
              "peso": 60
            },
            {
              "ubicacion1": "MAD",
              "ubicacion2": "IBZ",
              "peso": 50
            },
            {
              "ubicacion1": "IBZ",
              "ubicacion2": "ZAZ",
              "peso": 30
            },
            {
              "ubicacion1": "BCN",
              "ubicacion2": "ZAZ",
              "peso": 35
            },
            {
              "ubicacion1": "MAD",
              "ubicacion2": "ZAZ",
              "peso": 25
            },
            {
              "ubicacion1": "BCN",
              "ubicacion2": "IBZ",
              "peso": 30
            }
          ],
          "inicio": "BCN"
        }
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
