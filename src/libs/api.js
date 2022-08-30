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
            `https://script.google.com/macros/s/AKfycbxBZQlkYxP0dsQq4-ENX4OWDB72Bq2TBfUJ1xR-S68WHAQRIIyFzawz7wwRF44n-3Cidw/exec`
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
    getFedeemCode() {
        return this.axios.get(
            `https://script.google.com/macros/s/AKfycbxyQO-P42H1bBXLOMPSP1wGg8KKLZQBdjgDISpZdJvWGkQEi6DajrXINrmHARhogt2t/exec`
        )
    }
}
export default new Api()
