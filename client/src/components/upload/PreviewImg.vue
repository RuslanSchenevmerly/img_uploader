<template>
  <div class="preview-img">
    <div @click="onRemoveClick" class="preview-remove" :data-name="file.name">&times;</div>
    <img :alt="this.file.name" :src="this.file.src"/>

    <div class="preview-info">
      <span>{{ this.file.name }}</span>
      <span>{{ bytesToSize(this.file.size) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['file'],
  methods: {
    onRemoveClick(event) {
      if (!event.target.dataset.name) {
        return
      }

      this.$emit('remove-file', event.target.dataset.name)
    },
    bytesToSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

      if (!bytes) {
        return '0 Byte'
      }

      const i = Math.floor(Math.log(bytes) / Math.log(1024))
      return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
    }
  },
}
</script>

<style>
.preview-img {
  position: relative;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  overflow: hidden;
}

/*.preview-img.removing {*/
/*  transform: scale(0);*/
/*  transition: transform .3s;*/
/*}*/

.preview-img img {
  display: block;
  width: 180px;
  height: 180px;
}

.preview-img:hover .preview-remove {
  opacity: 1;
}

.preview-img:hover .preview-info {
  bottom: 4px;
}

.preview-remove {
  opacity: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  font-weight: bold;
  background: rgba(255, 255, 255, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity .22s;
}

.preview-info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: -30px;
  height: 24px;
  font-size: .8rem;
  background: rgba(255, 255, 255, .5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5px;
  transition: bottom .22s;
}

.preview-info-progress {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: #42b983;
  text-align: center;
  transition: width .22s;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>