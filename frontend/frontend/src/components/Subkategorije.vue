<template>
  <div>
    <div class="row">
      <div class="col">{{ this.items.naziv }}</div>
      <div class="col">
        <p>{{ this.items.cijena }} €</p>
      </div>
      <div class="col">
        <a class="link-opacity-75-hover" href="#" @click="itemClicked(items)"
          >Opširnije</a
        >
      </div>
    </div>
    <hr />

    <div class="modal" tabindex="-1" id="my-modal-item">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h1 class="modal-title text-center mb-3">Opis</h1>
            <p class="fw-bolder">{{ modal_object.opis }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubKategorije",
  props: ["items"],
  methods: {
    itemClicked: function (item) {
      window.$(document).ready(function () {
        window.$("#my-modal-item").modal("show");
      });
      this.modal_object = item;
    },
  },
  data() {
    return {
      modal_object: {},
    };
  },
};
</script>
