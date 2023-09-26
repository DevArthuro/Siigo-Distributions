import { defineStore } from 'pinia'

export const useDataGraph = defineStore('GraphData', {
    state: () => ({

    }),

    actions: {
        getMap(slug)
        {
            const data = data = {
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
                  {
                    id: 7,
                    label: "Malaga",
                    x: 20,
                    y: 5
                  },
                  {
                    id: 8,
                    label: "Bogota",
                    x: 35,
                    y: 20
                  }
                ],
                connections: [
                  {
                    id: 1,
                    source: 1,
                    target: 2,
                    weight: 20
                  },
                  {
                    id: 2,
                    source: 1,
                    target: 4,
                    weight: 20
                  },
                  {
                    id: 3,
                    source: 2,
                    target: 6,
                    weight: 20
                  },
                  {
                    id: 4,
                    source: 2,
                    target: 5,
                    weight: 20
                  },
                  {
                    id: 5,
                    source: 2,
                    target: 3,
                    weight: 20
                  },
                  {
                    id: 6,
                    source: 3,
                    target: 8,
                    weight: 20
                  },
                  {
                    id: 7,
                    source: 3,
                    target: 7,
                    weight: 20
                  },
                  {
                    id: 8,
                    source: 7,
                    target: 4,
                    weight: 20
                  }
                ]
              };

            return data;
        }
    }

})