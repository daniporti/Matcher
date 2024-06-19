<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.content {
  padding: 20px;
}

h1 {
  color: #ff5a5f;
  font-weight: 500;
}

p {
  color: #4a4a4a;
  margin: 10px 0;
}

.create-account-btn {
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
}

a {
  color: #ff5a5f;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
