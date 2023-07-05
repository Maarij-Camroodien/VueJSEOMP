<template>
  <div class="conatiner cardho d-flex justify-content-center align-items-center">
    <div class="card mb-3" style="max-width: 50rem;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i.postimg.cc/hvY27DC5/e2c147ed-0f95-4798-96a5-93863264d3a4.jpg" id="homeimg" class="img-fluid rounded-start" alt="img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 id class="card-title">MA'ARIJ CAMROODIEN</h1>
        <h1 id class="card-text">ASPIRING FULL-STACK DEVELOPER</h1>
        <button class="letsbutton"><router-link to="/contact"></router-link>LET'S CONNECT</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>

.cardho {
  margin-top: 5rem;
  margin-bottom: 6rem;
}

.card {
  background-color: black;
}

.letsbutton:hover {
  color: purple;
  background-color: black;
}

.letsbutton {
  color: black;
  border: none;
  border-radius: 0.3rem;
  height: 2rem;
  width: 8rem;
  margin-top: 3rem;
  font-weight: bold;
}

#homeimg {
  border-radius: 1rem;
}

h1 {
  color: white;
}


@media screen and (max-width: 900px) and (min-width: 481px) and (max-height: 1280px) {
  .cardho {
    margin-top: 15.1rem;
    margin-bottom: 15rem;
  }
  .card {
    display: inline-block;
  }
}
</style>
