<template>
<h1 class="testihead">TESTIMONIALS</h1>
  <div class="container d-flex justify-content-center">
    <div id="testcard" class="card mb-3">
  <div class="row g-0" id="testicard"
            v-for="testimonials in testimonials"
            :key="testimonials.id">
    <div class="col-md-4">
      <img :src="testimonials.image" class="img-fluid rounded-start" :alt="testimonials.name">
    </div>
    <div class="col-md-8">
      <div class="card-body testt h-100">
        <h5 class="card-title">{{ testimonials.name }}</h5>
        <p class="card-text">{{ testimonials.testi }}</p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
.testihead {
  margin-top: 4rem;
  margin-bottom: 2rem;
}

#testcard {
  width: 80%;
  border: none;
  background-color: black;
}

#testicard {
  margin-bottom: 1rem;
}

.testt{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  /* padding-top: 3rem; */
}

.card-text {
  color: white;
}

h5 {
  color: white;
}

</style>