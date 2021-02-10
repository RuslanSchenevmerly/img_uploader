<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/upload">Upload</router-link>
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap';


export default {
  name: "Navbar"
}
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.css";

</style>