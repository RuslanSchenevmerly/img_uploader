<template>
  <div class="preview-img">
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  props: ['url'],
  name: "PreviewImg"
}
</script>

<style scoped>
.preview-img {
  position: relative;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  overflow: hidden;
}

.preview-img img {
  display: block;
  width: 180px;
  height: 180px;
}
</style>