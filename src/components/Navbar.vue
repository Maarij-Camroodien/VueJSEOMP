<template>
  <div>
        <nav class="navbar navbar-expand-lg">
     <div class="container-fluid">
    <router-link class="navbar-brand" to="/">MA'ARIJ CAMROODIEN</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <router-link to="/" id="links">HOME</router-link>
        <router-link to="/aboutandskills" id="links">ABOUT & SKILLS</router-link>
        <router-link to="/resume" id="links">RESUME</router-link>
        <router-link to="/projectsandtestimonials" id="links">PROJECTS & TESTIMNIALS</router-link>
        <router-link to="/contactme" id="links">CONTACT ME</router-link>
      </div>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>