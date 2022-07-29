<template>
  <nav>
  <div><router-link to="/user"><h1 class="logo">Twooter</h1></router-link></div>
  <div class="router-link">
    <router-link to="/user">Home</router-link> |
    <router-link to="/">News Feed</router-link>
  </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: rgb(225, 225, 225);
  border: 2px solid rgb(222, 222, 222);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5vw;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #386490;
}

.router-link {
  position: absolute;
  left: 84%;
  top: 50px;
}

.logo {
  font-size: 3vw;
  color: #2c3e50;
}

button {
  background-color: rgb(222, 222, 222);
  border: none;
  color: #2c3e50;;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: Helvetica;
}

button:hover {
    transform: scale(1.15,1.15);
    color: #386490;
}
</style>
