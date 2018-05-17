<template>
  <div class="app" >
    <img v-webp.bg="[require('./assets/test.jpg'), require('./assets/test.webp')]"/>
    <img v-webp.bg="'data:image/gif;base64,R0lGODlhAQAcALMAAMXh96HR97XZ98Hf98Xg97DX97nb98Lf97vc98Tg973d96rU97ba97%2Fe96XS9wAAACH5BAAAAAAALAAAAAABABwAAAQVMLhVBDNItXESAURyDI2CGIxQLE4EADs%3D'"/>
    <img src="./assets/test.jpg"/>
  </div>
</template>

<script>
export default {
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
