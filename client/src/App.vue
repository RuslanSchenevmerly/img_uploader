<template>
  <div id="app">
  <Navbar />

    <div class="container">
      <div class="card">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
  comments: {
    Navbar
  }
}
</script>

<style>
body {
  background: lightsteelblue;
}

.container {
  padding-top: 5rem;
  width: 850px;
  margin: 0 auto;
}

.card {
  border-radius: 25px;
  background-color: white;
  text-align: center;
  padding: 1rem;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, .2);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
