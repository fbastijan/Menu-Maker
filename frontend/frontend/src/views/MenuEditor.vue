<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <!--<MenuRevisor class="mb-3"></MenuRevisor>-->
          <div class="card custom-card shadow" style="border-radius: 25px">
            <div class="card-body">
              <h1 class="card-title text-center display-2">{{ name }}</h1>
              <button
                type="button"
                class="btn btn-primary mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Dodaj Stavku
              </button>

              <router-link to="/menu/arhiva">
                <button
                  type="button"
                  class="btn btn-primary mb-3 my-button ms-2"
                >
                  Arhiva
                </button>
              </router-link>
              <div class="row mb-3">
                <div class="col-2">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="selectedOne"
                  >
                    <option value="hrana">Hrana</option>
                    <option value="pice">Pice</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>
                <div class="col d-flex">
                  <select
                    class="form-select me-3"
                    aria-label="Default select example"
                    v-model="selectedTwo"
                    v-if="selectedOne"
                  >
                    <option
                      v-for="(el, index) in kategorije[selectedOne]"
                      :key="index"
                    >
                      {{ el }}
                    </option>
                  </select>
                  <button
                    class="btn btn-primary"
                    @click="getPaginated(selectedOne, selectedTwo, 1)"
                  >
                    pretraži
                  </button>
                </div>
                <div class="col"></div>
              </div>
              <StavkeMenu :info="this.paginated.items" class="mb-3" />
              <div class="text-center row" v-if="paginated.items">
                <div class="col">
                  <button
                    v-if="this.paginated.hasPrevPage"
                    class="btn btn-primary"
                    @click="
                      changePage(
                        paginatedSelectedOne,
                        paginatedSelectedTwo,
                        this.page,
                        'previous'
                      )
                    "
                  >
                    Prev
                  </button>
                </div>
                <div class="col">
                  <p>Page: {{ page }}</p>
                </div>
                <div class="col">
                  <button
                    class="btn btn-primary"
                    v-if="paginated.hasNextPage"
                    @click="
                      changePage(
                        paginatedSelectedOne,
                        paginatedSelectedTwo,
                        this.page,
                        'next'
                      )
                    "
                  >
                    Next
                  </button>
                </div>
              </div>
              <div class="text-center" ref="pdf">
                <QRCodeVue3
                  :value="getUrlQR()"
                  downloadButton="btn btn-primary mb-3"
                  :downloadOptions="{ name: 'vqr', extension: 'png' }"
                  :download="true"
                  :width="200"
                  :height="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Dodaj Stavku  -->
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
              <label class="form-label">Opis/količina</label>
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

            <div class="mb-3">
              <label class="form-label">Pending items</label>
              <textarea
                class="form-control"
                rows="3"
                v-model="pending"
                placeholder="format: #Naziv&Opis&Type&Subtype&CijenaUEur"
              >
              </textarea>
            </div>

            <button
              type="button"
              class="btn btn-primary mb-3"
              @click="saveItem()"
            >
              Dodaj
            </button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="finializeMenu()"
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
import { items, kategorije, paginated } from "@/store";
import QRCodeVue3 from "qrcode-vue3";
import { menuHandlers } from "@/Warehouse/menu";

//import MenuRevisor from "../components/menuRevisor.vue";
export default {
  name: "editor_view",
  components: {
    StavkeMenu,
    QRCodeVue3,
    //MenuRevisor,
  },
  mounted() {
    this.getMenuItems();
    this.sortItems();
    console.log(JSON.parse(menuHandlers.getStorage()));
    this.menuInfo();
  },

  methods: {
    menuInfo() {
      let parsed = JSON.parse(menuHandlers.getStorage());
      this.kategorije = parsed.kategorije;
      this.name = parsed.name;
    },

    async getPaginated(type, subtype, pageNumber) {
      console.log(type, subtype, pageNumber);
      this.paginated = await menuHandlers.searchByAndPaginate(
        this.menuId,
        type,
        subtype,
        pageNumber
      );
      this.page = 1;
      this.paginatedSelectedOne = this.selectedOne;
      this.paginatedSelectedTwo = this.selectedTWo;
      this.paginated = this.paginated.data;
    },
    async changePage(type, subtype, pageNumber, direction) {
      console.log(type, subtype, pageNumber);

      if (direction == "next" && this.paginated.hasNextPage) {
        this.page++;
        pageNumber++;
      }
      if (direction == "previous" && this.paginated.hasPrevPage) {
        this.page--;
        pageNumber--;
      }
      this.paginated = await menuHandlers.searchByAndPaginate(
        this.menuId,
        type,
        subtype,
        pageNumber
      );
      this.paginated = this.paginated.data;
    },
    getUrlQR() {
      return window.location.href + "/guest";
    },

    async getMenuItems() {
      let res = await menuHandlers.getMenuItems(this.menuId);
      this.items = res.data.menu;
    },
    saveItem() {
      this.pending +=
        this.modal_object.naziv +
        "&" +
        this.modal_object.opis +
        "&" +
        this.modal_object.type +
        "&" +
        this.modal_object.subtype +
        "&" +
        this.modal_object.cijena +
        "\n";
      console.log(JSON.stringify(this.pending));
      this.modal_object = {};
      this.sortItems();
    },

    async finializeMenu() {
      const rows = this.pending.split("\n");

      // Creating objects from each row
      let arrPending = [];
      rows.forEach((row) => {
        const attributes = row.split("&");

        if (attributes.length != 5) {
          return true;
        }
        const obj = {
          naziv: attributes[0],
          opis: attributes[1],
          type: attributes[2],
          subtype: attributes[3],
          cijena: attributes[4],
        };

        arrPending.push(obj);
      });

      if (arrPending.length != 0) {
        try {
          let res = await menuHandlers.setMenuItem(this.menuId, arrPending);
          console.log(res.data);
          this.pending = "";
          this.getMenuItems();
        } catch (e) {
          console.log(e);
        }
      }
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
      name,
      items,
      pending: "",
      tip: "",
      modal_object: {},
      kategorije,
      imageData: null,
      newData: "",
      QrURL: "",
      menuId: this.$route.params.id,
      selectedOne: "",
      selectedTwo: "",
      paginated,
      paginatedSelectedOne: "",
      paginatedSelectedTwo: "",
      page: 1,
    };
  },
};
</script>
<style>
.btn-primary {
  background-color: brown !important;
  border-color: brown !important;
}
.btn-primary:hover {
  background-color: brown !important;
  border-color: brown !important;
}
.btn-primary:active {
  background-color: brown !important;
  border-color: brown !important;
}
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
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
