<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <div class="card-body">
              <h1 class="card-title text-center display-2">Menu Generator</h1>
              <p class="card-text display-5 m-5">
                Dobrodošli u našu aplikaciju za generiranje jelovnika restorana.
                Kreirajte prekrasne i prilagođene menije za svoj restoran s
                lakoćom. Koristite naše intuitivno sučelje za dodavanje jela,
                postavljanje cijena i prikazivanje svojih kulinarskih ponuda na
                stilski način.
              </p>
              <router-link
                to="/menucreator"
                style="text-decoration: none; color: inherit"
              >
                <a
                  href="#"
                  class="btn custom-btn btn-primary btn-lg m-5 float-end"
                  >Get started!</a
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//aaaaaaaa
export default {
  name: "Home_view",
};
</script>
<style>
.custom-btn {
  font-size: 2rem; /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
.custom-btn:active {
  font-size: 2rem; /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
.custom-btn:hover {
  font-size: 2rem; /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
</style>
