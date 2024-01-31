<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <h5 class="card-header">Register</h5>
            <div class="card-body">
              <div class="row d-flex align-items-center">
                <div class="col">
                  <h1 class="card-title display-5 mb-5">
                    Lets get you started!
                  </h1>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="name@example.com"
                      v-model="userCred.email"
                    />
                    <label>Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="username"
                      class="form-control"
                      placeholder="username"
                      v-model="userCred.username"
                    />
                    <label>Username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="userCred.password"
                    />
                    <label>Password</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="userCred.confirm_password"
                    />
                    <label>Confirm Password</label>
                  </div>

                  <a
                    href="#"
                    class="btn custom-btn-2 btn-primary btn-lg mt-5"
                    @click="register()"
                    >Register</a
                  >
                </div>

                <div class="col">
                  <img src="../assets/MenuStock.png" alt="" class="img-fluid" />
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
import { userCred } from "@/store";
import { auth } from "@/Warehouse/auth";
export default {
  name: "RegisterView",
  data() {
    return {
      userCred,
      auth,
    };
  },
  methods: {
    register() {
      auth
        .signup(userCred)
        .then((res) => {
          console.log(res);
          //this.$router.push("/login");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
<style scoped>
.custom-btn-2 {
  font-size: 1rem; /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
.custom-btn-2:active {
  /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
.custom-btn-2:hover {
  /* Custom button font size */
  background-color: brown !important;
  border-color: brown !important;
}
</style>
