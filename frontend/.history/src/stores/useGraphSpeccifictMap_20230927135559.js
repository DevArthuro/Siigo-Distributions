import { defineStore } from 'pinia'

export const useDataGraph = defineStore('GraphData', {
    state: () => ({

    }),

    actions: {
        getMap(slug)
        {
            const data = [
              {
              id: '',
              name: "cartagena",
              slug: '',
              locations: [
                  {
                    id: 1,
                    label: "Valencia",
                    position_x: 30,
                    y: 20
                  },
                  {
                    id: 2,
                    label: "Saragosa",
                    position_x: 20,
                    y: 10
                  },
                  {
                    id: 3,
                    label: "Malaga",
                    position_x: 10,
                    y: 15
                  },
                  {
                    id: 4,
                    label: "Bogota",
                    position_x: 40,
                    y: 0
                  },
                  {
                    id: 5,
                    label: "Valencia",
                    position_x: 10,
                    y: 0
                  },
                  {
                    id: 6,
                    label: "Saragosa",
                    position_x: 10, //position_x
                    y: 0 // position_y
                  },
                  
                ],
              connections: [
                  {
                    id: 1,
                    start: 1, //
                    end: 2,
                    weight: 20
                  },
                  {
                    id: 2,
                    start: 1,
                    end: 4,
                    weight: 20
                  },
                  {
                    id: 3,
                    start: 2,
                    end: 6,
                    weight: 20
                  },
                  {
                    id: 4,
                    start: 2,
                    end: 5,
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
                      y: 10
                    },
                    {
                      id: 3,
                      label: "Malaga",
                      position_x: 10,
                      y: 15
                    },
                    {
                      id: 4,
                      label: "ecuador",
                      position_x: 40,
                      y: 0
                    },
                    {
                      id: 5,
                      label: "Valencia",
                      position_x: 10,
                      y: 0
                    },
                    {
                      id: 6,
                      label: "Saragosa",
                      position_x: 10,
                      y: 45
                    },
                    
                  ],
                connections: [
                    {
                      id: 1,
                      start: 1,
                      end: 2,
                      weight: 20
                    },
                    {
                      id: 2,
                      start: 1,
                      end: 4,
                      weight: 20
                    },
                    {
                      id: 3,
                      start: 2,
                      end: 6,
                      weight: 20
                    },
                    {
                      id: 4,
                      start: 2,
                      end: 5,
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
                      y: 50
                    },
                    {
                      id: 2,
                      label: "Saragosa",
                      position_x: 20,
                      y: 10
                    },
                    {
                      id: 3,
                      label: "Malaga",
                      position_x: 10,
                      y: 15
                    },
                    {
                      id: 4,
                      label: "ecuador",
                      position_x: 40,
                      y: 20
                    },
                    {
                      id: 5,
                      label: "Valencia",
                      position_x: 10,
                      y: 0
                    },
                    {
                      id: 6,
                      label: "Saragosa",
                      position_x: 10,
                      y: 0
                    },
                    
                  ],
                connections: [
                    {
                      id: 1,
                      start: 1,
                      end: 2,
                      weight: 20
                    },
                    {
                      id: 2,
                      start: 1,
                      end: 4,
                      weight: 20
                    },
                    {
                      id: 3,
                      start: 2,
                      end: 6,
                      weight: 20
                    },
                    {
                      id: 4,
                      start: 2,
                      end: 5,
                      weight: 20
                    },
                    
                  ]
              },
              
            ];

            return data;
        }
    }

})