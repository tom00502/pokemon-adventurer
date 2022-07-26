import { defineStore } from 'pinia'
import api from '@/libs/api'
export const usePokedexStore = defineStore({
    id: 'usePokedexStore',
    state: () => ({
        pokes: [],
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        getPokedex() {
            const quality = {
                n: 'normal',
                r: 'rare',
                e: 'epic',
                l: 'legend',
                b: 'beyond',
            }
            if (this.pokes.length == 0) {
                api.getPokedex().then((res) => {
                    const entries = res.data.map((poke) => {
                        return [
                            poke.i,
                            {
                                name: poke.n,
                                attribute: poke.a.filter((attr) => attr),
                                quality: quality[poke.q],
                            },
                        ]
                    })
                    this.pokes = Object.fromEntries(entries)
                })
            }
        },
    },
})
