<template>
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

</style>