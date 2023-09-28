import { defineStore } from "pinia";
import axios from "axios";

export const useDataGraph = defineStore("GraphData", {
  state: () => ({
    url: "http://172.18.100.67:8000",
    data: [],
    message: ''

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
        const response = await request.data
        const message = [response.status, response.detail]
        this.message = response.detail
        return message

      }
      catch (error)
      {
        return error
      }
    },

    async calculateAlgorithm(map, fist_position, second_position)
    {
      try
      {
        const url = this.url + "/optimal-way/"
        const data = {
          starts_at: fist_position,
          ends_at: second_position,
          map_route_slug: map
        }
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 8a0af303301ae408ec1d7d496d3f1f8c7743ee0e'
          }
        }
        const request = axios.post(url, data, )
      }
      catch(error)
      {
        console.log(error)
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
