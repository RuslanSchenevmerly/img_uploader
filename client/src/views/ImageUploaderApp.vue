<template>
  <div>
    <h1>Upload image</h1>
    <input accept="image/*" @change="inputChanged" multiple type="file" style="display: none" ref="fileInput">

    <button @click="$refs.fileInput.click()" class="btn">Open...</button>
    <button v-if="this.files.length > 0" @click="onUpload" class="btn primary">Upload...</button>

    <div class="preview">
      <PreviewImg
          v-on:remove-file="removeFile"
          v-for="file of files"
          v-bind:file="file"
      />
    </div>
  </div>
</template>

<script>
import PreviewImg from "@/components/upload/PreviewImg";
import firebase from "firebase";
import 'firebase/storage'

export default {
  name: "App",
  data() {
    return {
      files: []
    }
  },
  methods: {
    inputChanged(event) {
      if (!event.target.files.length) {
        return
      }

      this.files = [...event.target.files]

      this.files.forEach(file => {
        if (!file.type.match('image')) {
          alert('You are trying to upload not image file')
          this.files.clear()
          return
        }

        file.src = URL.createObjectURL(file)
      })
    },
    onUpload() {
      const storage = firebase.storage()
      const blocks = document.querySelectorAll('.preview-info')
      document.querySelectorAll('.preview-remove').forEach(e => e.remove())

      blocks.forEach((block, index) => {
        const file = this.files[index]
        const ref = storage.ref(`images/${file.name}`);
        const task = ref.put(file)

        task.on(`state_changed`, snapshot => {
              const percentage = `${Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)}%`

              block.style.bottom = '4px';
              block.innerHTML = `<div class="preview-info-progress"></div>`

              const previewProgressBlock = block.querySelector('.preview-info-progress')
              previewProgressBlock.textContent = percentage
              previewProgressBlock.style.width = percentage
            },
            error => {
              console.log(error.message)
            },
            () => {
              this.uploadValue = 100;
              task.snapshot.ref.getDownloadURL().then((url) => {
                console.log(url)
              })
            }
        )
      })
    },
    removeFile(name) {
      this.files = this.files.filter(file => file.name !== name)
    }
  },
  components: {
    PreviewImg
  },
};
</script>

<style scoped>
.preview {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
}

.btn {
  color: #42b983;
  position: relative;
  border-radius: 99px;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
  cursor: pointer;
  margin-right: 1rem;
}

.btn.primary {
  background: #42b983;
  color: #fff
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>