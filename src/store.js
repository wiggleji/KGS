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
    filterList(state) {
      state.filteredList = state.govJson.filter(e => e.keyword.includes(state.keyword))
    }
  },
  actions: {
    // async function, can change data
    callChangeKeywordMutation(store, keyword) {
      store.commit('changeKeyword', keyword)
    },
    callFilterListMutation(store) {
      store.commit('filterList')
    }
  },
  getters: {
    FilteredList(state) {
      return state.filteredList
    }
  },
  strict: true
})

export default store