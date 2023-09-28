import { defineStore } from "pinia";
import axios from "axios";

export const useDataGraph = defineStore("GraphData", {
  state: () => ({
    url: "http://172.18.100.67:8000",
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

    async setNewNodo(map, name, posX, posY)
    {
      try
      {
        const url = this.url + `/locations/${map}/create/`
        const data = {
            label: name,
            position_x: posX,
            position_y: posY
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 8a0af303301ae408ec1d7d496d3f1f8c7743ee0e'
          }
        }
        const request = await axios.post(url, data, config)
        
        const message = request.status

        return message

      }
      catch (error)
      {
        return error
      }
    },

    getData(slug) {
      
      return this.data;
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
