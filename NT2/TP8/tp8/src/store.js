import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        urlUsers: 'https://60a27ab7745cd70017577277.mockapi.io/getUsers',
        users: '',
    },
    actions : {
        postApi({commit}, formData) {
            try {
                axios.post(this.state.urlUsers, formData, {'content-type':'application/json'})
              }
              catch(error) {
                console.error(error)
              }
            commit('postApi', formData) 
        },
        getApi({commit}) {
            axios(this.state.urlUsers)
            .then(respuesta => {
              this.state.users = respuesta.data
            })
            .catch(error => console.error(error))
            commit('getApi', this.state.users) 
        },
    },
    mutations : {
        postApi(state, formData) {
            console.log(formData)
        },
        getApi(state, users) {
            console.log(users)
        },
    }
})
