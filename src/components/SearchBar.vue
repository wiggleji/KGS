<template>
  <label>
    Search:
    <input type="text" id="search-bar" v-model="keyword" v-on:keyup.enter="searchJson">
    <button type="submit" @click="searchJson" value="">Search</button>
  </label>
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
      searchJson() {
        this.$emit('keyword', this.keyword)
      }
    }
  }
</script>

<style scoped>

</style>