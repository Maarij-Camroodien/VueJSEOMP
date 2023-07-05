<template>
  <div class="projects">
    <div class="row my-3">
      <h1>PROJECTS</h1>
    </div>
    <div class="container" v-motion-pop>
      <div class="row justify-content-center gap-3">
        <div
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
            <a :href="projects.netlify" target="_blank"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container testimonials">
    <div class="row my-3">
      <h1 class="testihead">TESTIMONIALS</h1>
    </div>
    <div class="container cont" v-motion-pop>
        <div class="col-xl-12 ">
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
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>
<style scoped>

.bi:hover {
  color: purple;
}

.bi {
  color: black;
  background-color: white;
  font-size: 2rem;
}

.testimonials {
    border-top: solid 0.1rem white;
    margin-top: 5rem
}

a:hover {
  color: red;
}

a {
  margin: 1rem;
  text-decoration: none;
}

img {
  border: solid 1px black;
}

#testimg {
  border: none;
  height: 100%;
}

.cont {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-width {
  width: 18rem;
  height: 53.5rem;
}

/* .card-body */

.image {
  width: 100%;
  height: 26rem;
}
.colum{
    display: flex;
    gap: 4rem;
}
</style>