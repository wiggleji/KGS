<template>
  <div>
    <form>
      <input type="text" placeholder="키워드를 입력하세요." id="search-bar" v-model="keyword" v-on:keyup.enter="setKeyword">
      <button type="button" @click="setKeyword" value="">Search</button>
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
  }

  p {
    font-family: saeng;
  }
</style>