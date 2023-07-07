<template>
  <div
    class="conatiner cardho d-flex justify-content-center align-items-center h-100"
  >
    <div class="card mb-3" style="max-width: 50rem">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.postimg.cc/hvY27DC5/e2c147ed-0f95-4798-96a5-93863264d3a4.jpg"
            id="homeimg"
            class="img-fluid rounded-start animate__animated animate__fadeInDown animate__delay-1s 1s"
            alt="img"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body abt">
            <h1
              class="card-title animate__animated animate__fadeInDown animate__delay-1s 1s"
            >
              MA'ARIJ CAMROODIEN
            </h1>
            <h1
              class="card-text animate__animated animate__fadeInDown animate__delay-2s"
            >
              ASPIRING FULL-STACK DEVELOPER
            </h1>
            <button
              class="letsbutton animate__animated animate__fadeInDown animate__delay-3s 3s"
            >
              <router-link class="letsbutton" to="/contactme">LET'S CONNECT</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <!-- <h1 class="animate__animated animate__fadeInDown animate__delay-1s  1s display-5">MA'ARIJ CAMROODIEN</h1>
  <h1 class="animate__animated animate__fadeInDown animate__delay-2s  2s">ASPIRING FULL-STACK DEVELOPER</h1> -->
  
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.card-title {
  text-decoration: none;
}

.card-text {
  text-decoration: none;
}

.abouthead {
  margin-bottom: 4rem;
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
  text-decoration: none;
}

#homeimg {
  border-radius: 1rem;
}

h1 {
  color: white;
}

/* @media screen and (max-width: 900px) and (min-width: 481px) and (max-height: 1280px) {
  .cardho {
    margin-top: 15.1rem;
    margin-bottom: 15rem;
  }
  .card {
    display: inline-block;
  }
} */
</style>
