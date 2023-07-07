<template>
    <h1 class="abouthead animate__animated animate__fadeInDown animate__delay-1s 1s">ABOUT ME</h1>
  <div class="aboutsec d-flex justify-content-center align-items-center h-100">
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
              passion for coding and decided to persue a career in
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
        
    }
</script>

<style scoped>
.card {
  background-color: black;
}
.abtimg {
  border-radius: 50%;
  width: 17rem;
  border: 7px solid #CAE9FF;
  border-radius: 61% 39% 65% 35% / 38% 62% 38% 62%;
  background-image: linear-gradient(45deg, #1B4965, #5FA8D3 100%);
  background-position: top -10px center;
  background-blend-mode: multiply;
  animation: morph 8s ease-in-out infinite;
}
@keyframes morph {
  0% {
    border-radius: 43% 57% 30% 70% / 62% 32% 68% 38%;
  }
  50% {
    border-radius: 17% 83% 20% 80% / 63% 22% 78% 37%;
    background-image: linear-gradient(45deg, white, white 50%, white 90%);
  }
  75% {
    border-radius: 29% 71% 44% 56% / 49% 50% 50% 51%;
  }
  100% {
    border-radius: 43% 57% 30% 70% / 62% 32% 68% 38%;
  }
}
  

.abtt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 3rem; */
  height: 100%;
  margin-top: 2rem;
}
.abot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 3rem; */
  height: 100%;
}

</style>