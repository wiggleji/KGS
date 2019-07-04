import Vue from 'vue'
import Vuex from 'vuex'

import gov_json_list from './assets/gov_link'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // data
    filteredList: [],
    govJson: gov_json_list,
    keyword: '',
  },
  mutations: {
    // sync function, can change data
    changeKeyword(state, payload) {
      state.keyword = payload
    },
  },
  actions: {
    // async function, can change data, usually call mutations
    callChangeKeywordMutation(store, keyword) {
      store.commit('changeKeyword', keyword)
    },
  },
  getters: {
    filteredList: (state) => (keyword) => {
      // filter list by keyword
      return state.govJson.filter(el => {
        return el.keyword.includes(keyword)
      })
    }
  },
  strict: true
})

export default store