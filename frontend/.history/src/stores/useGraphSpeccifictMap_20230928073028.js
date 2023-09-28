import { defineStore } from "pinia";
import axios from "axios";

export const useDataGraph = defineStore("GraphData", {
  state: () => ({
    url: "http://172.18.100.67:8000/map-routes/",
    data: [
      {
        id: "",
        name: "cartagena",
        slug: "",
        locations: [
          {
            id: 1,
            label: "Valencia",
            position_x: 30,
            position_y: 20,
          },
          {
            id: 2,
            label: "Saragosa",
            position_x: 20,
            position_y: 10,
          },
          {
            id: 3,
            label: "Malaga",
            position_x: 10,
            position_y: 15,
          },
          {
            id: 4,
            label: "Bogota",
            position_x: 40,
            position_y: 0,
          },
          {
            id: 5,
            label: "Valencia",
            position_x: 10,
            position_y: 0,
          },
          {
            id: 6,
            label: "Saragosa",
            position_x: 10, //position_x
            position_y: 0, // position_y
          },
        ],
        connections: [
          {
            id: 1,
            first_location: 1, //
            second_location: 2,
            weight: 20,
          },
          {
            id: 2,
            first_location: 1,
            second_location: 4,
            weight: 20,
          },
          {
            id: 3,
            first_location: 2,
            second_location: 6,
            weight: 20,
          },
          {
            id: 4,
            first_location: 2,
            second_location: 5,
            weight: 20,
          },
        ],
      },
      {
        id: "",
        name: "Libia",
        slug: "",
        locations: [
          {
            id: 1,
            label: "Valencia",
            position_x: 30,
            position_y: 0,
          },
          {
            id: 2,
            label: "Saragosa",
            position_x: 20,
            position_y: 10,
          },
          {
            id: 3,
            label: "Malaga",
            position_x: 10,
            position_y: 15,
          },
          {
            id: 4,
            label: "ecuador",
            position_x: 40,
            position_y: 0,
          },
          {
            id: 5,
            label: "Valencia",
            position_x: 10,
            position_y: 0,
          },
          {
            id: 6,
            label: "Saragosa",
            position_x: 10,
            position_y: 45,
          },
        ],
        connections: [
          {
            id: 1,
            first_location: 1,
            second_location: 2,
            weight: 20,
          },
          {
            id: 2,
            first_location: 1,
            second_location: 4,
            weight: 20,
          },
          {
            id: 3,
            first_location: 2,
            second_location: 6,
            weight: 20,
          },
          {
            id: 4,
            first_location: 2,
            second_location: 5,
            weight: 20,
          },
        ],
      },
      {
        id: "",
        name: "Bogotá",
        slug: "",
        locations: [
          {
            id: 1,
            label: "Valencia",
            position_x: 30,
            position_y: 50,
          },
          {
            id: 2,
            label: "Saragosa",
            position_x: 20,
            position_y: 10,
          },
          {
            id: 3,
            label: "Malaga",
            position_x: 10,
            position_y: 15,
          },
          {
            id: 4,
            label: "ecuador",
            position_x: 40,
            position_y: 20,
          },
          {
            id: 5,
            label: "Valencia",
            position_x: 10,
            position_y: 0,
          },
          {
            id: 6,
            label: "Saragosa",
            position_x: 10,
            position_y: 0,
          },
        ],
        connections: [
          {
            id: 1,
            first_location: 1,
            second_location: 2,
            weight: 20,
          },
          {
            id: 2,
            first_location: 1,
            second_location: 4,
            weight: 20,
          },
          {
            id: 3,
            first_location: 2,
            second_location: 6,
            weight: 20,
          },
          {
            id: 4,
            first_location: 2,
            second_location: 5,
            weight: 20,
          },
        ],
      },
    ],

  }),

  actions: {
    async getMaps()
    {
        try{
          const url = "http://172.18.100.67:8000/map-routes"
          const request = await fetch(url, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authentication': 'Token '
            }
          })

          const json = await request.json()

          this.data = await json

          return request.status
        }
        catch(error)
        {
          return error
        }
    }

    getData(slug) {
      
      return this.data;
    },

    setNewNodo(position, location_new)
    {
        let count = this.data[position].locations.length;
        location_new.id = count+=1; 
        this.data[position].locations.push(location_new);
    },

    setEdge(position, edge_new)
    {
        let count = this.data[position].connections.length;
        edge_new.id = count+=1;
        console.log(edge_new.id)
        console.log(this.data[position].connections)
        console.log(edge_new)
        this.data[position].locations.push(edge_new);
    }
  },
});
