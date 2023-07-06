<template>
  
  <div class="container">
    <h1 class="continfoh">CONTACT INFO:</h1>
      <div class="col-12 col-md-12 d-flex align-items-center animate__animated animate__fadeInDown animate__delay-2s 2s">
        <div class="card contactinf">
          <ul class="list-group list-group-flush">
            <h5 class="itemss list-group-item">
              Email: maarijcamroodien@gmail.com
            </h5>
            <h5 class="itemss list-group-item">Cell: +2782716507</h5>
            <h5 class="itemss list-group-item">
              Address: Rylands, Atlone, Cape Town, Western Cape
            </h5>
            <h5 class="itemss list-group-item">Instagram: maarij_camroodien <a href="https://www.instagram.com/maarij_camroodien/" target="_blank"><i class="bi bi-instagram"></i></a></h5>
            <h5 class="itemss list-group-item">Github: Maarij-Camroodien <a href="https://github.com/Maarij-Camroodien" target="_blank"><i class="bi bi-github"></i></a></h5>
            <h5 class="itemss list-group-item">LinkedIn: Ma'arij Camroodien <a href="https://www.linkedin.com/in/ma-arij-camroodien-384525276/" target="_blank"><i class="bi bi-linkedin"></i></a></h5>
          </ul>
        </div>
      </div>
      <h1>CONTACT ME</h1>
    <div class="row">
      <div class="contt col-12 col-md-12 animate__animated animate__fadeInDown animate__delay-1s 1s">
        <form action="https://formspree.io/f/mnqkqnag" method="POST">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >First Name</label
            >
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name"
              name="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Surname</label
            >
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Surname"
              name="surname"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@gmail.com"
              name="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Your Message</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>    
          <button class="subtn" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contactinf {
  width: 100%;
  background-color: black;
  border: solid 2px white;
  margin-bottom: 4rem;
}

.itemss {
  background-color: black;
  color: white;
}

.subtn:hover {
  color: purple;
  background-color: black;
}

.subtn {
  color: black;
  border: none;
  border-radius: 0.3rem;
  height: 2rem;
  width: 8rem;
  font-weight: bold; 
}

h1{
    margin-bottom: 2rem;
}
</style>