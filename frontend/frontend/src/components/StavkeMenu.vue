<template>
  <div>
    <div v-for="(item, index) in this.info" :key="index">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="row d-flex">
            <div class="col">Naziv: {{ item.naziv }}</div>

            <div class="col">Tip: {{ item.subtype }}</div>
            <div class="col">Cijena: {{ item.cijena }}Eura</div>
            <div class="col-1">
              <a
                class="btn btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#' + item.naziv + '-my-modal'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
                  />
                </svg>
              </a>
            </div>
            <div class="col-1">
              <a class="btn btn-sm" @click="deleteItem(item._id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div
        class="modal fade"
        :id="item.naziv + '-my-modal'"
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
                  v-model="item.naziv"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Opis/količina</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="item.opis"
                ></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Kategorija</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="item.type"
                >
                  <option value="pice">Piće</option>
                  <option value="hrana">Hrana</option>
                  <option value="ostalo">Ostalo</option>
                </select>
              </div>

              <div class="mb-3" v-if="item.type">
                <label class="form-label">Kategorija</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="item.subtype"
                >
                  <option
                    :value="items"
                    v-for="(items, index) in this.kategorije[item.type]"
                    :key="index"
                  >
                    {{ items }}
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
                  v-model="item.cijena"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="updateItem(item._id, item)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { items, kategorije } from "@/store";
import { menuHandlers } from "@/Warehouse/menu";
export default {
  props: ["info"],
  methods: {
    async updateItem(itemId, change) {
      delete change._id;
      let res = await menuHandlers.updateMenuItem(itemId, change);
      console.log(res);
    },
    async deleteItem(id) {
      console.log(JSON.stringify(items));
      this.items.splice(
        this.items.findIndex((el) => {
          el._id == id;
        }),
        -1
      );
      await menuHandlers.deleteItem(id);
    },
  },
  data() {
    return {
      items: items,
      kategorije,
      modal_object: {},
      temp: this.info,
    };
  },
};
</script>

<style></style>
