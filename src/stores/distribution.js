import { defineStore } from 'pinia'
import api from '@/libs/api'
import { usePokedexStore } from '@/stores/pokedex'
const pokedexStore = usePokedexStore()
export const useDistributionStore = defineStore({
    id: 'useDistributionStore',
    state: () => ({
        distributions: [],
    }),
    getters: {},
    actions: {
        getDistributions() {
            if (this.distributions.length == 0) {
                api.getDistributed().then((res) => {
                    this.distributions = res.data.map((area) => {
                        const pokes = area.p.map((poke) => ({
                            ...(poke.f && { frequency: poke.f }),
                            ...pokedexStore.pokes[poke.n],
                        }))
                        return { name: area.a, pokes }
                    })
                })
            }
        },
    },
})
