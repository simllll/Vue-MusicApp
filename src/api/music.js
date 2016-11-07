import Vue from 'vue'

export default {
    search(key) {
        return Vue.http.get(`/search/${key}/1`)
            .then(res => res.json(), 
                res => console.error('error: ', res.status, res.statusText))
    },
    getSong(id) {
        return Vue.http.get(`/song/${id}`)
            .then(res => res.text(), 
                res => console.error('error: ', res.status, res.statusText))
    }
}