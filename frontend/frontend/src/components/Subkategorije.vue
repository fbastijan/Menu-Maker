<template>
  <div>
    <div class="row">
      <div class="col">{{ this.items.naziv }}</div>
      <div class="col">
        <p>{{ this.items.cijena }} €</p>
      </div>
      <div class="col">
        <a
          class="link-opacity-75-hover"
          href="#"
          data-bs-toggle="modal"
          :data-bs-target="'#A' + this.items._id + '-my-modal'"
          >Opširnije</a
        >
      </div>
    </div>
    <hr />

    <div class="modal" tabindex="-1" :id="'A' + this.items._id + '-my-modal'">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Opis</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="fw-bolder">{{ this.items.opis }}</p>
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
