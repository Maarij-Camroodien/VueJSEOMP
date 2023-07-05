<template>
  <!-- <div class="container workandedu">
    <div class="row my-3">
      <h1>Work and Education</h1>
    </div>
    <div class="container cont">
        <div class="col-xl-12 ">
      <div class="row justify-content-center colum">
          <div
            class="card p-0 card-width"
            id="testicard"
            v-for="education in education"
            :key="education.id"
          >
            <div class="image">
              <img
                :src="education.image"
                loading="lazy"
                id="testimg"
                class="card-img-top"
                :alt="education.headingone"
              />
            </div>
            <div class="card-body">
              <h4 class="card-text">
                {{ education.headingone }}
              </h4>
              <p class="card-text">
                {{ education.contentone  }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
<h1>WORK & EDUCATION</h1>
<div class="d-flex justify-content-center" v-motion-pop>
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0" style="background-color: black; padding: 2rem; color: white;"
            v-for="education in education"
            :key="education.id">
    <div class="col-md-4">
      <img :src="education.image" class="img-fluid rounded-start" :alt="education.headingone">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title  text-white">{{ education.headingone }}</h5>
        <p class="card-text  text-white">{{ education.contentone }}</p>
        <h5 class="card-title  text-white">{{ education.headingtwo }}</h5>
        <p class="card-text  text-white">{{ education.contenttwo }}</p>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
};
</script>
<style scoped>
p {
  color: black;
}
.card {
  margin: 1rem;
}

</style>