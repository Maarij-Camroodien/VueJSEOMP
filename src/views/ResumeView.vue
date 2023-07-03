<template>
    <div></div>
     <!-- v-for="education in education" :key="education.id"
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="" alt="img" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ education.headingone }}</h5>
          <p>{{ education.contentone }}</p>
          <h5>{{ education.headingtwo }}</h5>
          <p>{{ education.contenttwo }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" alt="img" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ education.headingthree }}</h5>
          <p>{{ education.contentthree }}</p>
          <h5>{{ education.headingfour }}</h5>
          <p>{{ education.contentfour }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" alt="img" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ education.headingfive }}</h5>
          <p>{{ education.contentfive }}</p>
          <h5>{{ education.headingsix }}</h5>
          <p>{{ education.contentsix }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
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
</style>