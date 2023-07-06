<template>
<h1>WORK & EDUCATION</h1>
<div class="d-flex justify-content-center" v-motion-pop>
  <div class="card mb-3" style="max-width: 1000px;">
  <div class="row g-0" style="background-color: black; padding: 2rem; color: white;"
            v-for="education in education"
            :key="education.id">
    <div class="col-md-4">
      <img :src="education.image" class="img-fluid rounded-start animate__animated animate__fadeInDown animate__delay-2s  2s" :alt="education.headingone">
    </div>
    <div class="col-md-8 edu">
      <div class="card-body educ">
        <h3 class="card-title  text-white animate__animated animate__fadeInDown animate__delay-1s  1s">{{ education.headingone }}</h3>
        <h5 class="card-text  text-white animate__animated animate__fadeInDown animate__delay-3s  3s">{{ education.contentone }}</h5>
        <h3 class="card-title  text-white animate__animated animate__fadeInDown animate__delay-1s  1s">{{ education.headingtwo }}</h3>
        <h5 class="card-text  text-white animate__animated animate__fadeInDown animate__delay-3s  3s">{{ education.contenttwo }}</h5>
      </div>
    </div>
  </div>
</div>
</div>

<h1 class="skillshead">SKILLS</h1>
<div class="container" style="margin-bottom: 5rem;" v-motion-pop-visible>
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
            <h5 class="car card-text">
              {{ skills.level }}
            </h5>
          </div>
        </div>
      </div>
    </div>
    <a href="https://drive.google.com/uc?export=download&id=1XUpG6mA4NC-IeHBANv1md_io-kSMFWKP" download><button class="downlaodbtn">Download CV</button></a>

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
.skillshead {
  margin-top: 5rem;
}

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

.edu{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 3rem; */
}
.educ{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  /* padding-top: 3rem; */
}

.downlaodbtn:hover {
  color: purple;
  background-color: black;
}

.downlaodbtn {
  color: black;
  border: none;
  border-radius: 0.3rem;
  height: 2rem;
  width: 8rem;
  margin-top: 3rem;
  font-weight: bold;
  text-decoration: none; 
}

</style>