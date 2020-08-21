<template lang="html">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/calculateaqi">Calculate AQI</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
  }
}
</script>

<style>
nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #5f5f5f;
  height: 44px;
  width: 100%;
}
nav a {
  float: left;
}

nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

router-link:hover {
  background-color: #111;
}
</style>
