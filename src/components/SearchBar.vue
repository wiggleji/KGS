<template>
  <div>
    <form v-on:submit.prevent>
      <div class="search_bar">
        <div class="container">
          <span class="icon"><i class="fa fa-search"></i></span>
          <input type="search" id="search" placeholder="키워드를 입력하세요." v-model="keyword" v-on:keyup.enter="setKeyword"/>
        </div>
      </div>
    </form>
    <div>
      <ul style="list-style-type: none">
        <li v-for="result in filteredData">{{ result.keyword }} : {{ result.url }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data() {
      return {
        keyword: '',
      }
    },
    methods: {
      setKeyword() {
        // call mutation to change keyword
        this.$store.dispatch("callChangeKeywordMutation", {keyword: this.keyword})
      }
    },
    computed: {
      filteredData() {
        // call getter to filter list by keyword
        return this.$store.getters.filteredList(this.keyword)
      }
    }
  }
</script>

<style scoped>
  form {
    align-itemsi: center;
  }

  input {
    font-family: saeng;
    text-align: center;
    margin: 0px auto;
  }
  p {
    font-family: saeng;
  }
  #search {
    width: 100%;
  }
  .container {
    width: 350px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }
  .icon {
    position: absolute;
    top: -10%;
    margin-left: 38%;
    margin-top: 17px;
    z-index: 1;
    color: #4f5b66;
  }
</style>