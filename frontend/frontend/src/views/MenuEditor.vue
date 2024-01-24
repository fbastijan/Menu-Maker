<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <div class="card-body">
              <h1 class="card-title text-center display-2">Dobar Bar Pula</h1>
              <button
                type="button"
                class="btn btn-primary mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Dodaj Stavku
              </button>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Hrana
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <StavkeMenu :info="this.items" :additional="'hrana'" />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Piće
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <StavkeMenu :info="this.items" :additional="'pice'" />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Ostalo
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <StavkeMenu :info="this.items" :additional="'ostalo'" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Dodaj stavku</h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Naziv</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="npr.Pizza Margherita"
                v-model="modal_object.naziv"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Opis</label>
              <textarea
                class="form-control"
                rows="3"
                v-model="modal_object.opis"
              ></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Kategorija</label>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="modal_object.type"
              >
                <option value="pice">Piće</option>
                <option value="hrana">Hrana</option>
                <option value="ostalo">Ostalo</option>
              </select>
            </div>
            <div
              class="mb-3"
              v-if="
                modal_object.type &&
                this.kategorije[this.modal_object.type].length > 0
              "
            >
              <label class="form-label">Kategorija</label>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="modal_object.subtype"
              >
                <option
                  :value="item"
                  v-for="(item, index) in this.kategorije[
                    this.modal_object.type
                  ]"
                  :key="index"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Cijena u Eurima</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="npr 50"
                v-model="modal_object.cijena"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="saveItem"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//aaaaaaaa
import StavkeMenu from "@/components/StavkeMenu.vue";
export default {
  name: "editor_view",
  components: {
    StavkeMenu,
  },
  mounted() {
    this.sortItems();
  },
  methods: {
    saveItem() {
      this.items.push(this.modal_object);
      this.modal_object = {};
      this.sortItems();
    },
    sortItems() {
      this.items.sort((a, b) => {
        const A = a.subtype.toUpperCase(); // ignore upper and lowercase
        const B = b.subtype.toUpperCase(); // ignore upper and lowercase
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    },
  },
  data() {
    return {
      tip: "",
      modal_object: {},
      kategorije: {
        pice: [
          "Alkoholna pića",
          "Bezalkoholna pića",
          "Gazirana Bezalkoholna pića",
          "Kava",
        ],
        hrana: ["Predjelo", "Glavno jelo", "Desert"],
        ostalo: [],
      },
      items: [
        {
          naziv: "Pizza Margherita",
          opis: "Rajčice, Sir, tijesto",
          type: "hrana",
          subtype: "Glavno jelo",
          cijena: 40,
        },
        {
          naziv: "Spaghetti Bolognese",
          opis: "Meso, Umak od rajčice, Tjestenina",
          type: "hrana",
          subtype: "Glavno jelo",
          cijena: 35,
        },
        {
          naziv: "Chicken Caesar Salad",
          opis: "Pileće meso, Zelena salata, Caesar umak",
          type: "hrana",
          subtype: "Predjelo",
          cijena: 28,
        },
        {
          naziv: "Margarita Cocktail",
          opis: "Tekila, Likor od naranče, Sok od limete",
          type: "pice",
          subtype: "Alkoholna pića",
          cijena: 12,
        },
        {
          naziv: "Cheeseburger",
          opis: "Meso, Sir, Pecivo, Umak",
          type: "hrana",
          subtype: "Glavno Jelo",
          cijena: 45,
        },
        {
          naziv: "Pizza Margherita",
          opis: "Rajčice, Sir, tijesto",
          type: "hrana",
          subtype: "Glavno jelo",
          cijena: 40,
        },
        {
          naziv: "Spaghetti Bolognese",
          opis: "Meso, Umak od rajčice, Tjestenina",
          type: "hrana",
          subtype: "Glavno jelo",
          cijena: 35,
        },
        {
          naziv: "Chicken Caesar Salad",
          opis: "Pileće meso, Zelena salata, Caesar umak",
          type: "hrana",
          subtype: "Predjelo",
          cijena: 28,
        },
        {
          naziv: "Margarita Cocktail",
          opis: "Tekila, Likor od naranče, Sok od limete",
          type: "pice",
          subtype: "Alkoholna pića",
          cijena: 12,
        },
        {
          naziv: "Cheeseburger",
          opis: "Meso, Sir, Pecivo, Umak",
          type: "hrana",
          subtype: "Glavno Jelo",
          cijena: 45,
        },
      ],
    };
  },
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
.accordion-body {
  max-height: 40vh;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
