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
            `https://script.googleusercontent.com/macros/echo?user_content_key=85Dy-cJLNpyO-65lYjXLAVfjgnY6nQzq1EkQGkJ9vUsRd5FW03za9C6qRo_Qd4mBZv_fm-azdT8MJ0-QiK-WgU6eydv0sU2Zm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDus6kii9d3qpcjtXP3uVQKQeQVf8z_GWE4n7m3oyR9C9jhUfoYr-7FRdtEs7DFcwKG3EwxGU7wBjBu1aLCsbdnqVbB5QZ5jqtz9Jw9Md8uu&lib=M1qbV1DiGc1dUIkA4VDuQ1YjJMObnyAlE`
        )
    }
    getDistributed() {
        return this.axios.get(
            `https://script.googleusercontent.com/macros/echo?user_content_key=jMnpbiHoOdVWuyROuZP8swzz9en3Gz1k-pqwVC7S4nC1hGr0JrYx5ApZg7LDxnikWy4oYLdZhSJII9gRU_8zx_RJY7ceR4gam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOfF4Hx3Ud5KuDaPnutspoLM3r2QTtm0qZRauxld2DnDSCiKrfkBSn_JaRzac1B5t9dKg6mXHl_IeLMwAdo1HZ0XpE6Q3Mofedz9Jw9Md8uu&lib=MzIC-8IS4ZXLVjXHjTrz4EojJMObnyAlE`
        )
    }
}
export default new Api()
