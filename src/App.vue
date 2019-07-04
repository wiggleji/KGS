<template>
  <div id="app">
    <search-bar></search-bar>
    <search-list></search-list>
  </div>
</template>

<script>
  import SearchBar from './components/SearchBar'
  import SearchList from './components/SearchList'

  export default {
    name: 'app',
    components: {
      SearchList,
      SearchBar,
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
