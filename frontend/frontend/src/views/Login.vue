<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card shadow" style="border-radius: 25px">
            <h5 class="card-header">Login</h5>
            <div class="card-body">
              <div class="row d-flex align-items-center">
                <div class="col">
                  <h1 class="card-title display-5 mb-5">Welcome back!</h1>

                  <div class="form-floating mb-3">
                    <input
                      type="username"
                      class="form-control"
                      id="floatingInput"
                      placeholder="username"
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <a href="#" class="btn custom-btn-2 btn-primary btn-lg mt-5"
                    >Login</a
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
export default {
  name: "LoginView",
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
