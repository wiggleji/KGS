<template>
  <ul style="list-style-type: none">
    <li v-for="result in jsonResult">
      <p> {{ result.keyword }}</p>
      <p> {{ result.url }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "SearchList",
    props: ['jsonResult'],
    methods: {

    }
  }
</script>

<style scoped>

</style>