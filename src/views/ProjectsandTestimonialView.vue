<template>
    <div>
    <div class="row my-3">
        <h2>Projects</h2>
    </div>
    <div class="container ">
        <div class="row justify-content-center gap-3">
        <div class="card p-0" v-for="projects in projects" style="width: 20rem" :key="projects.id">
            <img :src="projects.image" loading="lazy" class="card-img-top" :alt="projects.nmae" />
            <div class="card-body">
            <h4 class="card-text">
                {{ projects.name }}
            </h4>
            <a :href="projects.github" target="_blank">Github Link</a>
            <a :href="projects.netlify" target="_blank">Netlify Link</a>
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
                return this.$store.state.projects
            }
        },
        mounted() {
            this.$store.dispatch('fetchProjects')
        }
    }
</script>
<style scoped>
a:hover {
    color: red;
}

a{
    margin: 1rem;
    text-decoration: none;
}

img {
    border: solid 1px black;
}
</style>