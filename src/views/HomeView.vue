<template>
  <div
    class="conatiner cardho d-flex justify-content-center align-items-center"
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
  <h1 class="abouthead animate__animated animate__fadeInDown animate__delay-1s 1s">ABOUT ME</h1>
  <div class="aboutsec d-flex justify-content-center">
    <div class="card mb-3" style="max-width: 1200px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.postimg.cc/287CMJYy/img4.jpg"
            class="abtimg img-fluid animate__animated animate__fadeInDown animate__delay-1s 1s"
            alt="logo"
          />
        </div>
        <div class="col-md-8 abot">
          <div class="card-body abtt animate__animated animate__fadeInDown animate__delay-2s 2s">
            <h5 class="card-title text-white">Hi, I'm Ma'arij Camroodien</h5>
            <h5 class="card-text text-white">
              I'm 19 years old and I just finished matric with little to no
              coding experience. I've been working with computers from the age
              of 13 and the more I worked with them I discoverd that I have a
              passion for computers and decided to persue a career in
              Web-Development. In my free time I enjoy playing sports, watching
              anime and spending time with my family and friends.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.abouthead {
  margin-bottom: 4rem;
}

.cardho {
  margin-top: 3rem;
  margin-bottom: 3rem;
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

.abtimg {
  border-radius: 50%;
  width: 15rem;
}

.abtt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 3rem; */
  height: 100%;
}
.abot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 3rem; */
  height: 100%;
}

.aboutsec {
  margin-bottom: 8rem;
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
