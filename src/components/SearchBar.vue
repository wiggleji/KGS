<template>
  <div>
  <label>
    Search:
    <input type="text" id="search-bar" v-model="keyword" v-on:keyup.enter="setKeyword">
    <button type="submit" @click="setKeyword" value="">Search</button>
  </label>
  <div>{{filteredData}}</div>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data() {
      return {
        // keyword: 검색 키워드, link: 결과 URL
        keyword: '',
      }
    },
    // govJson from App.vue
    methods: {
      setKeyword() {
        this.$store.dispatch("callChangeKeywordMutation", {keyword: this.keyword})
        // this.$store.dispatch("callFilterListMutation")
      }
    },
    computed: {
      filteredData() {
        return this.$store.getters.filteredList(this.keyword)
      }
    }
  }
</script>

<style scoped>

</style>