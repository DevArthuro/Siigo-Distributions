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
            
            const data = async () => {
              try
              {
                  const config = {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  }
                  const response = await axios.get(this.url)
                  
                  console.log(response.data)
                  return response.data
              }
              catch (error)
              {
                console.log(error)
              }
            }

            return [
              {
                  id: "9e091f56-40e2-4389-98e0-cda67a2d48ba",
                  name: "",
                  slug: "c5b018a819",
                  created_at: "2023-09-27T14:31:30.788471Z",
                  updated_at: "2023-09-27T14:31:30.792469Z",
                  locations: [
                      {
                          id: "d72e553c-8f53-4b6a-ac67-bf293501f953",
                          label: "A",
                          position_x: 20,
                          position_y: 20
                      },
                      {
                          id: "8cd5323f-6958-40a8-a066-9846ec2db31e",
                          label: "B",
                          position_x: 45,
                          position_y: 60
                      },
                      {
                          id: "237e11da-c4a8-41e6-b0da-bf99a862df12",
                          label: "C",
                          position_x: 79,
                          position_y: 90
                      },
                      {
                          "id": "a669c920-3797-495b-8b30-363874153e78",
                          "label": "D",
                          "position_x": 56,
                          "position_y": 79
                      }
                  ],
                  "connections": [
                      {
                          "id": "c042fba9-4a20-46f7-872b-5fea4ceb4f7d",
                          "first_location": "d72e553c-8f53-4b6a-ac67-bf293501f953",
                          "second_location": "8cd5323f-6958-40a8-a066-9846ec2db31e",
                          "weight": 20
                      },
                      {
                          "id": "3959930d-4bf2-47a1-a137-e52d955cd2bd",
                          "first_location": "237e11da-c4a8-41e6-b0da-bf99a862df12",
                          "second_location": "a669c920-3797-495b-8b30-363874153e78",
                          "weight": 50
                      }
                  ]
              },
              {
                  "id": "73bc8bd0-1d39-4445-9166-43b2860ccccf",
                  "name": "",
                  "slug": "c73c4c0b71",
                  "created_at": "2023-09-27T14:52:04.051163Z",
                  "updated_at": "2023-09-27T14:52:04.054163Z",
                  "locations": [],
                  "connections": []
              },
              {
                  "id": "22f41458-d439-4233-b183-d6ff21c84868",
                  "name": "",
                  "slug": "bbb24ed6d9",
                  "created_at": "2023-09-27T15:31:31.772356Z",
                  "updated_at": "2023-09-27T15:31:31.775355Z",
                  "locations": [
                      {
                          "id": "c5969442-a3c5-4a9c-a12c-7969e17a4fe7",
                          "label": "A",
                          "position_x": 20,
                          "position_y": 20
                      },
                      {
                          "id": "26000f0c-ed8d-4386-adc7-d5a49302e0f6",
                          "label": "B",
                          "position_x": 45,
                          "position_y": 60
                      },
                      {
                          "id": "b2185bea-d7ba-49b4-ac4c-2d467cded677",
                          "label": "C",
                          "position_x": 79,
                          "position_y": 90
                      },
                      {
                          "id": "5d7c251f-f163-4970-9bb9-2a792bcd0cce",
                          "label": "D",
                          "position_x": 56,
                          "position_y": 79
                      }
                  ],
                  "connections": [
                      {
                          "id": "4172872a-54dd-4ea5-a20f-8c1d7cbd990b",
                          "first_location": "c5969442-a3c5-4a9c-a12c-7969e17a4fe7",
                          "second_location": "26000f0c-ed8d-4386-adc7-d5a49302e0f6",
                          "weight": 20
                      },
                      {
                          "id": "b51466ac-59e6-41fb-b772-468216548cc3",
                          "first_location": "b2185bea-d7ba-49b4-ac4c-2d467cded677",
                          "second_location": "5d7c251f-f163-4970-9bb9-2a792bcd0cce",
                          "weight": 50
                      }
                  ]
              },
              {
                  "id": "7316c277-156e-45da-971b-999d84cab85c",
                  "name": "default map_route",
                  "slug": "default-map_route-61c6843493",
                  "created_at": "2023-09-27T15:37:37.559178Z",
                  "updated_at": "2023-09-27T15:37:37.559178Z",
                  "locations": [],
                  "connections": []
              },
              {
                  "id": "99d2f5a1-fa99-40ac-bc56-a9c4eb0d86f9",
                  "name": "NEW",
                  "slug": "new-c91294a632",
                  "created_at": "2023-09-27T15:57:12.665007Z",
                  "updated_at": "2023-09-27T15:57:12.665007Z",
                  "locations": [
                      {
                          "id": "90fa1ff2-f0b4-45ea-bf9f-ea92bcca9a4c",
                          "label": "A",
                          "position_x": 20,
                          "position_y": 20
                      }
                  ],
                  "connections": []
              }
          ];
        }
    }

})