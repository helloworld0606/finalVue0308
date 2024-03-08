<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'




</script>

<template>
 <div class="navbar">
      <nav>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/cabinrules">table</router-link>  
        <router-link to="/Rules">票價產品介紹</router-link> 
        <router-link to="/airtypes">機隊介紹</router-link> 
      </nav></div>

 <h2>Hello Vue!!</h2>
  <router-view/>
</template>

<style scoped>

.navbar {
  margin-bottom: 100px;
}

h2
{
  margin-left: 20px;
}

nav ul
{

  display: flex;
}

nav li{
  flex:1;
  list-style-type: none;
}
/* header {
  line-height: 1.8;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  width: 100%;
  background-color:navy;
  color: burlywood;
  position: fixed; /* 使導航欄固定在頂部 */
  top: 0; /* 將導航欄固定在頂部 */
text-align: center;

}

/* nav a.router-link-exact-active {
  
  color: var(--color-text);
} */
nav a.router-link-exact-active {
  
  color: burlywood;
}

nav a:not(.router-link-exact-active):hover {
  color: white;
}
nav router-link-exact-active {
  
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: inherit; /* 繼承父元素（nav）的顏色 */
  text-decoration: none; /* 刪除默認下劃線 */
  color:gray;
  margin-left: 14px;

}

nav a:first-of-type {
  border: 0;

}

@media (min-width: 1024px) {
  header {
    text-align: left;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 0;
    font-size: 1.5rem;

    padding: 0rem 0;
    margin-top: 0.2rem;

  }
}
</style>
