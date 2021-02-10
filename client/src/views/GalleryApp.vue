<template>
  <div>
    <h1>Gallery page</h1>
    <h3 v-if="this.urls < 1">There are no photos</h3>

    <div class="gallery-container">
      <PreviewImg
          v-for="url of urls"
          v-bind:url="url"
      />
    </div>
  </div>
</template>

<script>
import PreviewImg from "@/components/gallery/PreviewImg";
import firebase from "firebase";
import 'firebase/storage'

export default {
  name: "GalleryApp",
  components: {PreviewImg},
  data() {
    return {
      urls: []
    }
  },
  methods: {
    loadPhotos() {
      const storage = firebase.storage().ref('/images')

      if (this.urls.length > 0) {
        this.urls.clear()
      }

      storage.listAll().then((result) => {
        result.items.forEach((imgRef) => {
          imgRef.getDownloadURL().then((url) => {
            this.urls.push(url)
          })
        })
      })
    }
  },
  beforeMount() {
    this.loadPhotos()
  },
  comments: {
    PreviewImg
  }
}
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
}
</style>