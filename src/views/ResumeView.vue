<template>
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

<h1>SKILLS</h1>
<div class="container">
      <div class="row justify-content-center gap-3">
        <div
          class="card-sk p-0"
          v-for="skills in skills"
          style="width: 20rem"
          :key="skills.id"
        >
        <i :class="skills.image" :style="{'i': skills.color}"></i>
          <div class="card-body">
            <h4 class="car card-text">
              {{ skills.name }}
            </h4>
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
    skills() {
      return this.$store.state.skills;
    },
  },
  methods: {
    setColor(element, color) {
      element.style.color = color
    }
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
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

.card-sk {
  background-color: black;
}

.car:hover {
  color: purple;
}

.car {
  color: white;
}

i:hover {
  color: purple;
}

i {
  font-size: 7rem;
  color: white;
}

</style>