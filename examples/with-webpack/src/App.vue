<template>
  <div class="app" >
    <img v-webp.bg="[require('./assets/test.jpg'), require('./assets/test.webp')]"/>
    <img src="./assets/test.jpg"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
html, body {
  height: 100%;
  width: 100%;
}
.app img {
  width: 400px;
  height: 400px;
}
</style>
