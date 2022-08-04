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
            `https://script.google.com/macros/s/AKfycby3jODTS-UFwoG_LyXHnZcAngZ2_W92FN61FGzKPGY386iBrIwZw8-uJIJi_TO4aBtiiw/exec`
        )
    }
}
export default new Api()
