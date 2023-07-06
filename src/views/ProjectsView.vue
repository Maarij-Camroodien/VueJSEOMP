<template>
  <div class="projects">
    <div class="row my-3">
      <h1>PROJECTS</h1>
    </div>
    <div class="container" v-motion-pop>
      <div class="row justify-content-center gap-3">
        <div id="cardss"
          class="card p-0"
          v-for="projects in projects"
          style="width: 20rem"
          :key="projects.id"
        >
          <img
            :src="projects.image"
            loading="lazy"
            class="card-img-top"
            :alt="projects.name"
          />
          <div class="card-body">
            <h4 class="card-text">
              {{ projects.name }}
            </h4>
            <a :href="projects.github" target="_blank"><i class="bi bi-github"></i></a>
            <a :href="projects.netlify" target="_blank"><i id="linkded" class="bi bi-box-arrow-up-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container testimonials">
    <div class="row my-3">
      <h1 class="testihead">TESTIMONIALS</h1>
    </div>
    <div class="container cont" v-motion-pop>
        <div class="col-xl-12">
      <div class="row justify-content-center colum">
          <div
            class="card p-0 card-width"
            id="testicard"
            v-for="testimonials in testimonials"
            :key="testimonials.id"
            >
            <div class="image">
              <img
                :src="testimonials.image"
                loading="lazy"
                id="testimg"
                class="card-img-top"
                :alt="testimonials.name"
              />
            </div>
            <div class="card-body">
              <h4 class="card-text">
                {{ testimonials.name }}
              </h4>
              <p class="card-text">
                {{ testimonials.testi }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>
<style scoped>

.bi:hover {
  color: purple;
}


/* .col-md-4{
  display: flex;
  justify-content: start;
}

.col-md-8{
  width: 60%;
} */

#cardss:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

#cardss {
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(119, 34, 34, 0.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}

.card {
  background-color: black;
  border: 1px solid white;
}

.card-text {
  color: white;
}

h5 {
  color: white;
}

.bi {
  color: white;
  background-color: black;
  font-size: 2rem;
}

#linkded {
  font-size: 1.8rem;
}

a:hover {
  color: red;
}

a {
  margin: 1rem;
  text-decoration: none;
}



/* #testimg {
  border: none;
  height: 100%;
} */

/* .cont {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* .card-width {
  width: 18rem;
  height: 53.5rem;
} */

/* .card-body */

/* .image {
  width: 100%;
  height: 26rem;
}
.colum{
    display: flex;
    gap: 4rem;
} */
</style>