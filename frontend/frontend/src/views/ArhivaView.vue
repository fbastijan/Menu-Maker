<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <div class="card-body">
              <h1 class="card-title text-center display-2">Arhiva</h1>

              <router-link
                to="/menucreator"
                style="text-decoration: none; color: inherit"
              >
              </router-link>
              <ul class="list-group mb-3">
                <li
                  class="list-group-item"
                  v-for="(el, index) in arhiva.items"
                  :key="index"
                >
                  <div class="row">
                    <div class="col">
                      {{ applyDateFormatting(el.dateOfArchiving) }}
                    </div>
                    <div class="col-1">
                      <router-link :to="'/menu/arhiva/' + el._id">
                        <button class="btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-eye"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                            />
                            <path
                              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                            />
                          </svg>
                        </button>
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="text-center row" v-if="arhiva.items">
                <div class="col">
                  <button
                    v-if="this.arhiva.hasPrevPage"
                    class="btn btn-primary"
                    @click="changePage(this.page, 'previous')"
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
                    v-if="this.arhiva.hasNextPage"
                    @click="changePage(this.page, 'next')"
                  >
                    Next
                  </button>
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
//aaaaaaaa
import { menuHandlers } from "@/Warehouse/menu";
export default {
  name: "Home_view",
  data() {
    return {
      page: 1,
      id: this.$route.params.id,
      arhiva: [],
    };
  },
  computed: {},
  async mounted() {
    await this.getPaginated(this.page);
    console.log(this.arhiva);
  },
  methods: {
    async getPaginated(page) {
      this.arhiva = await menuHandlers.dohvatiArhivu(page, this.id);
    },
    async changePage(pageNumber, direction) {
      if (direction == "next" && this.arhiva.hasNextPage) {
        this.page = pageNumber + 1;
      }
      if (direction == "previous" && this.arhiva.hasPrevPage) {
        this.page = pageNumber - 1;
      }
      this.arhiva = await menuHandlers.dohvatiArhivu(this.page, this.id);
      console.log(this.arhiva);
    },
    applyDateFormatting(dateString) {
      let date = new Date(dateString);
      return date.toLocaleDateString("hr-HR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
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
