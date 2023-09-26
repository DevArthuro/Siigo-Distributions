import { defineStore } from 'pinia'

export const useDataGraph = defineStore('GraphData', {
    state: () => ({

    }),

    actions: {
        getMap(slug)
        {
            const data = {
                locations: [
                    {
                        id: 1,
                        label: 'Valencia',
                        x: 0,
                        y: 10,
                    },
                    {
                        id: 2,
                        label: 'Saragosa',
                        x: 10,
                        y: 0,
                    },
                    {
                        id: 3,
                        label: 'Malaga'
                        x: 20
                        y: 5
                    },
                    {
                        id: 4,
                        label: 'Bogota'
                        x: 35
                        y: 11
                    }
                ],
                connections: [
                    {
                        id: 1,
                        start: 1,
                        end: 2,
                        weight: 20
                    },
                    {
                        id: 1,
                        start: 2,
                        end: 3,
                        weight: 20
                    },
                    {
                        id: 1,
                        start: 2,
                        end: 4,
                        weight: 20
                    }
                ]
            }
        }
    }

})