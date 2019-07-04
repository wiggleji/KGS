<template>
  <ul style="list-style-type: none">
    <li v-for="result in filteredList">
      <p> {{ result.keyword }}</p>
      <p> {{ result.url }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "SearchList",
    methods: {
      filteredList: function() {
        return this.$store.getters.FilteredList()
      }
    }
  }
</script>

<style scoped>

</style>