import { defineStore } from "pinia";
import axios from "axios";

export const useDataGraph = defineStore("GraphData", {
  state: () => ({
    url: "http://172.18.100.67:8000/map-routes/",
    data: []

  }),

  actions: {
    async getMaps()
    {
        try{
          const url = this.url + "/map-routes/"
          const request = await axios.get(url, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token 8a0af303301ae408ec1d7d496d3f1f8c7743ee0e'
            }
          })

          const json = await request.data;

          this.data = await json
          return request.status
        }
        catch(error)
        {
          return error
        }
    },

    async setNewNodo()
    {
      const url 
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
