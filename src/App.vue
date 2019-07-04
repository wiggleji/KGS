<template>
  <div id="app">
    <search-header></search-header>
    <search-bar></search-bar>
    <search-footer></search-footer>
  </div>
</template>

<script>
  import SearchHeader from './components/SearchHeader'
  import SearchBar from './components/SearchBar'
  import SearchFooter from './components/SearchFooter'

  export default {
    name: 'app',
    components: {
      SearchHeader,
      SearchBar,
      SearchFooter,
    }
  }
</script>

<style>
  @import "https://unpkg.com/papercss@1.6.1/dist/paper.min.css";
  @font-face {
    font-family: 'saeng';
    src:url("./assets/SDMiSaeng.ttf")
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
