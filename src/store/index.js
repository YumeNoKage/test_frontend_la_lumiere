import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: null,
    isLoading: false,
    errorMessage: null,
    isError: false,
  },

  getters: {
    listData(state){
      return state.data
    },
    isLoading(state){
      return state.isLoading
    },
    errorMessage(state){
      return state.errorMessage
    },
    isError(state){
      return state.isError
    }
  },

  mutations: {
    setData(state, payload){
      state.data = payload
    },
    setLoading(state, payload){
      state.isLoading = payload
    },
    setErrorMessage(state, payload){
      state.errorMessage = payload
    },
    setIsError(state, payload){
      state.isError = payload
    }
  },
  
  actions: {
    getData: async function(){
      this.commit('setLoading', true)
      
      try {
        const response = await axios.get('https://raddythebrand.github.io/apex-legends/data.json')
        
        if (response.status == 200)
        this.commit('setData', response.data)
        this.commit('setLoading', false)
        
        return response
      } catch (error) {
        this.commit('setIsError', true)
        this.commit('setErrorMessage', error)
      }
    }
  },
})
