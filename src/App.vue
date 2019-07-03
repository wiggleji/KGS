<template>
  <div id="app">
    <search-bar v-on:keyword="getKeyword"></search-bar>
    <search-list v-bind:jsonResult="filteredList"></search-list>
    <button @click="onChangedMsg"></button>

  </div>
</template>

<script>
  import SearchBar from './components/SearchBar'
  import SearchList from './components/SearchList'

  import gov_json_list from './assets/gov_link'

  export default {
    name: 'app',
    components: {
      SearchList,
      SearchBar,
    },
    data() {
      return {
        keyword: '',
        list: [],
        govJson: gov_json_list,
      }
    },
    computed: {
      filteredList: function () {
        if (this.keyword !== "") {
          return this.govJson.filter(e => e.keyword.includes(this.keyword))
        }
      },
      getMsg () {
        return this.$store.getters.getMsg
      }
    },
    methods: {
      // SearchBar 로부터 keyword 수령
      getKeyword(keyword) {
        this.keyword = keyword
      },
      onChangedMsg () {
        this.$store.dispatch('callMutation', { newMsg: 'World !!' })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
