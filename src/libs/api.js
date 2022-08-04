import axios from 'axios'
class Api {
    axios
    constructor() {
        this.axios = axios.create({
            headers: { 'Content-Type': 'application/json' },
        })
    }
    getPokedex() {
        return this.axios.get(
            `https://script.google.com/macros/s/AKfycbxdmJ7--LQ-ofswDGVC61empqF0sRh7jDlJ1pdrdFIc7D8Uy8cV_FH8SZlC7m7Hf6ad4Q/exec`
        )
    }
    getDistributed() {
        return this.axios.get(
            `https://script.google.com/macros/s/AKfycbyPbo2DuwuJDodmmdN1rCtHT-SJtyUvMPgn-XXXfYFl_cGyQAKlr_J9iXESlw0viPLPJw/exec`
        )
    }
    getPokeMap() {
        return this.axios.get(
            `https://script.google.com/macros/s/AKfycbyyjjykVHZCc1tuHBxAh6wHKOl4nT4wuYKd8NBL8L3pzRemP2oqI0KlJp7EQGER42FBow/exec`
        )
    }
}
export default new Api()
