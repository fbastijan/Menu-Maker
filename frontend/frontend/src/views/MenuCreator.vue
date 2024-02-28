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
              <div class="row align-items-center">
                <div class="col">
                  <img
                    :src="
                      imageLoading ? 'https://placehold.co/100' : imgDataUrl
                    "
                    @load="imageLoading = false"
                    class="mx-auto d-flex"
                    style="height: 100; width: 100"
                  /><img />
                  <button
                    class="btn btn-sm btn-primary mx-auto d-flex mb-3"
                    @click="toggleShow()"
                  >
                    Background
                  </button>
                </div>
                <div class="col-8">
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
                </div>
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
                class="btn custom-btn btn-primary btn-lg m-5 float-end"
                @click="finalize()"
                >Završi</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <my-upload
        @crop-success="cropSuccess"
        field="img"
        v-model="show"
        :width="100"
        :height="100"
        img-format="png"
        langType="en"
        :noCircle="true"
      ></my-upload>
    </div>
  </div>
</template>

<script>
import { menuHandlers } from "@/Warehouse/menu";
import { imageHandlers } from "@/Warehouse/images";
import myUpload from "vue-image-crop-upload";

export default {
  name: "Menu_creator",
  components: {
    "my-upload": myUpload,
  },
  mounted() {
    this.getMenu();
  },
  watch: {
    imageDataUrl: function () {
      this.imageLoading = true;
    },
  },
  methods: {
    async dohvatiSliku() {
      try {
        let res = await imageHandlers.dohvatiSliku(this.menuId);
        this.imgDataUrl = res.data.result;
      } catch {
        this.imgDataUrl = "https://placehold.co/100";
      }
    },
    toggleShow() {
      this.show = !this.show;
      console.log(this.show);
    },

    async getMenu() {
      let pom = (await menuHandlers.getMenu()).data.menu;

      if (pom) {
        this.menuId = pom._id;
        this.dohvatiSliku();
        let menu = pom.menu;

        this.menu = menu;
        this.displayKategorije(menu);
      }
    },
    addKat(kat, gumb) {
      if (this.kategorije[kat])
        this.kategorije[kat] = this.kategorije[kat] + "\n" + gumb;
      else this.kategorije[kat] = gumb;
    },
    async finalize() {
      this.editKat();
      let res = await menuHandlers.setMenu(this.menu);

      await this.uploadImage(res.data.id);
      localStorage.setItem("menuId", res.data.id);
      this.$router.push("/menu/" + res.data.id);
    },
    removeDuplicates(arr) {
      var uniqueArray = [];
      arr.forEach(function (item) {
        var lowerCaseItem = item.toLowerCase(); // Convert item to lowercase
        if (
          !uniqueArray.some(function (existingItem) {
            return existingItem.toLowerCase() === lowerCaseItem;
          })
        ) {
          uniqueArray.push(item);
        }
      });
      return uniqueArray;
    },
    editKat() {
      this.kategorije.pice = this.kategorije.pice.replace(/\n+$/, "");
      this.kategorije.hrana = this.kategorije.hrana.replace(/\n+$/, "");
      this.kategorije.ostalo = this.kategorije.ostalo.replace(/\n+$/, "");
      this.menu.kategorije.pice = this.kategorije.pice.trim()
        ? this.kategorije.pice.split("\n")
        : [];
      this.menu.kategorije.hrana = this.kategorije.hrana.trim()
        ? this.kategorije.hrana.split("\n")
        : [];
      this.menu.kategorije.ostalo = this.kategorije.ostalo.trim()
        ? this.kategorije.ostalo.split("\n")
        : [];
      this.menu.kategorije.pice = this.removeDuplicates(
        this.menu.kategorije.pice
      );
      this.menu.kategorije.hrana = this.removeDuplicates(
        this.menu.kategorije.hrana
      );
      this.menu.kategorije.ostalo = this.removeDuplicates(
        this.menu.kategorije.ostalo
      );
    },
    displayKategorije(menu) {
      this.kategorije.pice =
        this.kategorije.hrana =
        this.kategorije.ostalo =
          "";
      menu.kategorije.pice.forEach((el) => {
        this.kategorije.pice = this.kategorije.pice + el + "\n";
      });
      menu.kategorije.hrana.forEach((el) => {
        this.kategorije.hrana = this.kategorije.hrana + el + "\n";
      });
      menu.kategorije.ostalo.forEach((el) => {
        this.kategorije.ostalo = this.kategorije.ostalo + el + "\n";
      });

      this.kategorije.pice = this.kategorije.pice.replace(/\n+$/, "");
      this.kategorije.hrana = this.kategorije.hrana.replace(/\n+$/, "");
      this.kategorije.ostalo = this.kategorije.ostalo.replace(/\n+$/, "");
    },

    async uploadImage(menuId) {
      await imageHandlers.prenesiSliku(this.imgDataUrl, menuId);
    },
    async cropSuccess(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
    },
  },
  data() {
    return {
      imageLoading: true,
      show: false,
      imgDataUrl: "https://placehold.co/100",
      menuId: "",

      menu: {
        name: "",
        kategorije: {
          pice: [],
          hrana: [],
          ostalo: [],
        },
      },

      kategorije: {
        pice: "Alkoholna pića\nBezalkoholna pića\nGazirana Bezalkoholna pića\nKava\n",
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
