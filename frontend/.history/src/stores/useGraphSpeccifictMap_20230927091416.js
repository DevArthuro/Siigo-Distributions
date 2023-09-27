import { defineStore } from 'pinia'

export const useDataGraph = defineStore('GraphData', {
    state: () => ({

    }),

    actions: {
        getMap(slug)
        {
            const data = [
              {
              cartagena: {
                locations: [
                  {
                    id: 1,
                    label: "Valencia",
                    x: 30,
                    y: 20
                  },
                  {
                    id: 2,
                    label: "Saragosa",
                    x: 20,
                    y: 10
                  },
                  {
                    id: 3,
                    label: "Malaga",
                    x: 10,
                    y: 15
                  },
                  {
                    id: 4,
                    label: "Bogota",
                    x: 40,
                    y: 0
                  },
                  {
                    id: 5,
                    label: "Valencia",
                    x: 10,
                    y: 0
                  },
                  {
                    id: 6,
                    label: "Saragosa",
                    x: 10,
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
              }
              },
              {
                Monteria: {
                  locations: [
                    {
                      id: 1,
                      label: "Valencia",
                      x: 30,
                      y: 20
                    },
                    {
                      id: 2,
                      label: "Saragosa",
                      x: 20,
                      y: 10
                    },
                    {
                      id: 3,
                      label: "Malaga",
                      x: 10,
                      y: 15
                    },
                    {
                      id: 4,
                      label: "Bogota",
                      x: 40,
                      y: 0
                    },
                    {
                      id: 5,
                      label: "Valencia",
                      x: 10,
                      y: 0
                    },
                    {
                      id: 6,
                      label: "Saragosa",
                      x: 10,
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
                }
                }
            ];

            return data;
        }
    }

})