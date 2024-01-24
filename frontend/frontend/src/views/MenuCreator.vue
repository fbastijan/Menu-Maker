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
                />
                <label for="floatingInput">Your Menu Name</label>
              </div>
              <VuePictureCropper
                :boxStyle="{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f8f8f8',
                  margin: 'auto',
                }"
                img="https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand"
                :options="{
                  viewMode: 1,
                  dragMode: 'crop',
                  aspectRatio: 16 / 9,
                }"
                @ready="ready"
              />
              <router-link
                to="/menucreator"
                style="text-decoration: none; color: inherit"
              >
                <a href="#" class="btn custom-btn btn-primary btn-lg m-5"
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
import VuePictureCropper from "vue-picture-cropper";
export default {
  name: "Menu_creator",
  component: {
    VuePictureCropper,
  },
  methods: {},
  data() {
    return {
      pic: " https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand",
    };
  },
};
</script>
