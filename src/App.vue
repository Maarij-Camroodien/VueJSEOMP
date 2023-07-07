<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
    export default {
      components: {
        Navbar,
        Footer
      }
        
    }
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto minmax(100vh, 1fr) auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
