import { defineStore } from 'pinia'
import api from '@/libs/api'
import { usePokedexStore } from '@/stores/pokedex'
export const useDistributionStore = defineStore({
    id: 'useDistributionStore',
    state: () => ({
        distributions: [],
        pokeMaps: [],
    }),
    getters: {},
    actions: {
        getDistributions() {
            // if (this.distributions.length == 0) {
            //     api.getDistributed().then((res) => {
            //         this.distributions = res.data.map((area) => {
            //             const pokes = area.p.map((poke) => ({
            //                 ...(poke.f && { frequency: poke.f }),
            //                 ...usePokedexStore().pokes[poke.n],
            //             }))
            //             return { name: area.a, pokes }
            //         })
            //     })
            // }
            if (this.pokeMaps.length == 0) {
                api.getPokeMap().then((res) => {
                    this.pokeMaps = res.data.map((area) => {
                        const pokes = area.pokes.map((poke) => ({
                            // ...(poke.f && { frequency: poke.f }),
                            ...usePokedexStore().pokes[poke],
                        }))
                        return { name: area.areaName, type: area.type, pokes }
                    })
                })
            }
        },
    },
})
