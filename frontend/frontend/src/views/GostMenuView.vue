<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <div class="card-body">
              <h1 class="card-title text-center mb-5">{{ this.menu.name }}</h1>
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-hrana"
                    type="button"
                    role="tab"
                    aria-controls="nav-hrana"
                    aria-selected="true"
                    v-if="kategorije.hrana.length > 0"
                  >
                    Hrana
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                    v-if="kategorije.pice.length > 0"
                  >
                    Piće
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    v-if="kategorije.ostalo.length > 0"
                  >
                    Ostalo
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-hrana"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div>
                    <h3 class="h3 mt-3"></h3>
                    <div class="row">
                      <div class="col">Naziv</div>
                      <div class="col">Cijena</div>
                      <div class="col"></div>
                    </div>
                    <hr />
                    <div
                      class=""
                      v-for="(item, index) in kategorije.hrana"
                      :key="index"
                    >
                      <h3 class="h3 mt-3">
                        <p>{{ item }}</p>
                      </h3>
                      <div v-for="(item2, index2) in items" :key="index2">
                        <div v-if="item2.subtype == item">
                          <Subkategorije :items="item2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div>
                    <h3 class="h3 mt-3"></h3>
                    <div class="row">
                      <div class="col">Naziv</div>
                      <div class="col">Cijena</div>
                      <div class="col"></div>
                    </div>
                    <hr />

                    <div
                      class=""
                      v-for="(item, index) in kategorije.pice"
                      :key="index"
                    >
                      <h3 class="h3 mt-3">
                        <p>{{ item }}</p>
                      </h3>
                      <div v-for="(item2, index2) in items" :key="index2">
                        <div v-if="item2.subtype == item">
                          <Subkategorije :items="item2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div>
                    <h3 class="h3 mt-3"></h3>
                    <div class="row">
                      <div class="col">Naziv</div>
                      <div class="col">Cijena</div>
                      <div class="col"></div>
                    </div>
                    <hr />
                    <div
                      class=""
                      v-for="(item, index) in kategorije.ostalo"
                      :key="index"
                    >
                      <h3 class="h3 mt-3">
                        <p>{{ item }}</p>
                      </h3>
                      <div v-for="(item2, index2) in this.items" :key="index2">
                        <div v-if="item2.subtype == item">
                          <Subkategorije :items="item2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subkategorije from "@/components/Subkategorije.vue";
import { menuHandlers } from "@/Warehouse/menu";
import { kategorije } from "@/store";
export default {
  name: "Home_view",
  components: {
    Subkategorije,
  },
  data() {
    return {
      menu: {},
      items: [],
      kategorije,
    };
  },
  mounted() {
    this.dohvatiSveIteme();
  },
  methods: {
    async dohvatiSveIteme() {
      let res = await menuHandlers.getMenuItems(this.$route.params.id);
      console.log(this.$route.params.id);
      this.items = res.data.menuItems;
      this.menu = res.data.menu.menu;
      this.kategorije = this.menu.kategorije;
      console.log(JSON.stringify(this.menu));
    },
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
</style>
