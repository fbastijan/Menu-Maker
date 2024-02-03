<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <div class="card-body">
              <h1 class="card-title text-center display-2">
                Restaurant Menu Generator
              </h1>
              <div class="form-floating mb-3 mx-3">
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                  v-model="menu.name"
                />
                <label for="floatingInput">Your Menu Name</label>
              </div>

              <h3 class="card-title text-center mb-3">
                Definiranje kategorija
              </h3>

              <div class="row ms-3">
                <div class="col">
                  <!-- #########PIĆA-->
                  <h3 class="h3 mb-3 text-center">Pića</h3>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Kategorija"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      v-model="piceGumb"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="addKat('pice', piceGumb)"
                    >
                      Dodaj
                    </button>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Kategorije</label
                    >
                    <textarea
                      class="form-control"
                      rows="3"
                      v-model="kategorije.pice"
                    >
Alkoholna pića
Bezalkoholna pića
Gazirana Bezalkoholna pića
Kava</textarea
                    >
                  </div>
                </div>
                <div class="col">
                  <!-- #########HRana-->
                  <h3 class="h3 mb-3 text-center">Hrana</h3>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Kategorija"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      v-model="hranaGumb"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="addKat('hrana', hranaGumb)"
                    >
                      Dodaj
                    </button>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Kategorije</label
                    >
                    <textarea
                      class="form-control"
                      rows="3"
                      v-model="kategorije.hrana"
                    >
Predjelo
Glavno Jelo
Desert</textarea
                    >
                  </div>
                </div>
                <div class="col">
                  <!-- #########Ostalo-->
                  <h3 class="h3 mb-3 text-center">Ostalo</h3>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Kategorija"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      v-model="ostaloGumb"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="addKat('ostalo', ostaloGumb)"
                    >
                      Dodaj
                    </button>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Kategorije</label
                    >
                    <textarea
                      class="form-control"
                      rows="3"
                      v-model="kategorije.ostalo"
                    ></textarea>
                  </div>
                </div>
              </div>

              <a
                href="#"
                class="btn custom-btn btn-primary btn-lg m-5"
                @click="finalize()"
                >Započni Menu!</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuHandlers } from "@/Warehouse/menu";
export default {
  name: "Menu_creator",

  methods: {
    addKat(kat, gumb) {
      if (this.kategorije[kat])
        this.kategorije[kat] = this.kategorije[kat] + "\n" + gumb;
      else this.kategorije[kat] = gumb;
    },
    async finalize() {
      this.menu.kategorije.pice = this.kategorije.pice.trim()
        ? this.kategorije.pice.split("\n")
        : [];
      this.menu.kategorije.hrana = this.kategorije.hrana.trim()
        ? this.kategorije.hrana.split("\n")
        : [];
      this.menu.kategorije.ostalo = this.kategorije.ostalo.trim()
        ? this.kategorije.ostalo.split("\n")
        : [];
      let res = await menuHandlers.setMenu(this.menu);

      console.log(res.data);
    },
  },
  data() {
    return {
      menu: {
        name: "",
        kategorije: {
          pice: [],
          hrana: [],
          ostalo: [],
        },
      },
      kategorije: {
        pice: "Alkoholna pića\nBezalkoholna pića\nGazirana Bezalkoholna pića\nKava",
        hrana: "Predjelo\nGlavno jelo\nDesert",
        ostalo: "",
      },
      hranaGumb: "",
      ostaloGumb: "",
      piceGumb: "",
    };
  },
};
</script>
<style>
.smaller-btn {
  background-color: brown !important;
  border-color: brown !important;
}
.smaller-btn:active {
  /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
.smaller-btn:hover {
  /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
</style>
