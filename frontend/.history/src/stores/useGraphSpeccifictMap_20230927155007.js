import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataGraph = defineStore('GraphData', {
    state: () => ({
      url: 'http://172.18.100.67:8000/map-routes/'
    }),

    actions: {
        getMap(slug)
        {
            const data_quemada = [
              {
              id: '',
              name: "cartagena",
              slug: '',
              locations: [
                  {
                    id: 1,
                    label: "Valencia",
                    position_x: 30,
                    position_y: 20
                  },
                  {
                    id: 2,
                    label: "Saragosa",
                    position_x: 20,
                    position_y: 10
                  },
                  {
                    id: 3,
                    label: "Malaga",
                    position_x: 10,
                    position_y: 15
                  },
                  {
                    id: 4,
                    label: "Bogota",
                    position_x: 40,
                    position_y: 0
                  },
                  {
                    id: 5,
                    label: "Valencia",
                    position_x: 10,
                    position_y: 0
                  },
                  {
                    id: 6,
                    label: "Saragosa",
                    position_x: 10, //position_x
                    position_y: 0 // position_y
                  },
                  
                ],
              connections: [
                  {
                    id: 1,
                    first_location: 1, //
                    second_location: 2,
                    weight: 20
                  },
                  {
                    id: 2,
                    first_location: 1,
                    second_location: 4,
                    weight: 20
                  },
                  {
                    id: 3,
                    first_location: 2,
                    second_location: 6,
                    weight: 20
                  },
                  {
                    id: 4,
                    first_location: 2,
                    second_location: 5,
                    weight: 20
                  },
                  
                ]
              },
              {
                id: '',
                name: "Libia",
                slug: '',
                locations: [
                    {
                      id: 1,
                      label: "Valencia",
                      position_x: 30,
                      position_y: 0
                    },
                    {
                      id: 2,
                      label: "Saragosa",
                      position_x: 20,
                      position_y: 10
                    },
                    {
                      id: 3,
                      label: "Malaga",
                      position_x: 10,
                      position_y: 15
                    },
                    {
                      id: 4,
                      label: "ecuador",
                      position_x: 40,
                      position_y: 0
                    },
                    {
                      id: 5,
                      label: "Valencia",
                      position_x: 10,
                      position_y: 0
                    },
                    {
                      id: 6,
                      label: "Saragosa",
                      position_x: 10,
                      position_y: 45
                    },
                    
                  ],
                connections: [
                    {
                      id: 1,
                      first_location: 1,
                      second_location: 2,
                      weight: 20
                    },
                    {
                      id: 2,
                      first_location: 1,
                      second_location: 4,
                      weight: 20
                    },
                    {
                      id: 3,
                      first_location: 2,
                      second_location: 6,
                      weight: 20
                    },
                    {
                      id: 4,
                      first_location: 2,
                      second_location: 5,
                      weight: 20
                    },
                    
                  ]
              },
              {
                id: '',
                name: "Bogotá",
                slug: '',
                locations: [
                    {
                      id: 1,
                      label: "Valencia",
                      position_x: 30,
                      position_y: 50
                    },
                    {
                      id: 2,
                      label: "Saragosa",
                      position_x: 20,
                      position_y: 10
                    },
                    {
                      id: 3,
                      label: "Malaga",
                      position_x: 10,
                      position_y: 15
                    },
                    {
                      id: 4,
                      label: "ecuador",
                      position_x: 40,
                      position_y: 20
                    },
                    {
                      id: 5,
                      label: "Valencia",
                      position_x: 10,
                      position_y: 0
                    },
                    {
                      id: 6,
                      label: "Saragosa",
                      position_x: 10,
                      position_y: 0
                    },
                    
                  ],
                connections: [
                    {
                      id: 1,
                      first_location: 1,
                      second_location: 2,
                      weight: 20
                    },
                    {
                      id: 2,
                      first_location: 1,
                      second_location: 4,
                      weight: 20
                    },
                    {
                      id: 3,
                      first_location: 2,
                      second_location: 6,
                      weight: 20
                    },
                    {
                      id: 4,
                      first_location: 2,
                      second_location: 5,
                      weight: 20
                    },
                    
                  ]
              },
              
            ];
            
            const functionGetMaps = async () => {
              try
              {
                  const config = {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Token 8a0af303301ae408ec1d7d496d3f1f8c7743ee0e'
                    }
                  }
                  const response = await axios.get(this.url, config)
                  
                  console.log(response.data)
                  return await response.data
              }
              catch (error)
              {
                console.log(error)
              }
            }
            return functionGetMaps();
        }
    }

})