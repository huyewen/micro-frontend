<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app1">app1</router-link> |
      <router-link to="/app2">app2</router-link> |
      <router-link to="/app3">app3</router-link>
    </div>
    <div id="microApp">
      <router-view/>
    </div>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#microApp {
  height: calc(100% - 79px);
}
</style>
