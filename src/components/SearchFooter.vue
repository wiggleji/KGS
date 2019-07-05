<template>
  <div class="row">
    <div>
      <a href=""><img src="../assets/github.svg" class="si intro_icon"></a>
    </div>
    <div>
      <a href=""><img src="../assets/facebook.svg" class="si intro_icon"></a>
    </div>
    <div>
      <a href=""><img src="../assets/email.svg" class="si intro_icon"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchFooter"
  }
</script>

<style scoped>
  div.row {
    width: 200px;
    margin: 0 auto;
  }

  img.intro_icon {
    width: 2em;
    height: 2em;
    text-align: center;
    margin: 5px 2px;
  }

  th {
    padding-left: 2em;
    padding-right: 2em;
  }

  .si:hover {
    opacity: 0.7;
  }
</style>