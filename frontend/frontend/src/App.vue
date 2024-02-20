<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Menu Maker</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#" v-if="authenticated.zast"
              ><router-link to="/" style="text-decoration: none; color: inherit"
                >Home</router-link
              ></a
            >
            <a class="nav-link" href="#" v-if="authenticated.zast"
              ><router-link
                to="/menucreator"
                style="text-decoration: none; color: inherit"
                >Make your menu</router-link
              ></a
            >
          </div>

          <div class="navbar-nav ms-auto">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              v-if="!authenticated.zast"
              ><router-link
                to="/login"
                style="text-decoration: none; color: inherit"
                >Login</router-link
              ></a
            >
            <a class="nav-link" href="#" v-if="!authenticated.zast"
              ><router-link
                to="/register"
                style="text-decoration: none; color: inherit"
                >Register</router-link
              ></a
            >

            <a
              class="nav-link"
              href="#"
              @click="odjava()"
              v-if="authenticated.zast"
              >Odjava</a
            >
          </div>
        </div>
      </div>
    </nav>
    <BackgroundImages />
    <router-view></router-view>
  </div>
</template>

<script>
import BackgroundImages from "@/components/BackgroundImages.vue";
import { auth } from "./Warehouse/auth";
import { flag } from "@/store";
export default {
  name: "App",
  components: { BackgroundImages },

  data() {
    return {
      lokUser: "",
      authenticated: flag,
    };
  },

  methods: {
    odjava() {
      auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
