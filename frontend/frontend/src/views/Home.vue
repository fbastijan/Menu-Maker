<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-9">
          <div class="card custom-card">
            <div class="card-body">
              <h1 class="card-title text-center display-2">
                Restaurant Menu Generator
              </h1>
              <p class="card-text display-5 m-5">
                Welcome to our restaurant menu generator app. Create beautiful
                and customized menus for your restaurant with ease. Use our
                intuitive interface to add dishes, set prices, and showcase your
                culinary offerings in style.
              </p>
              <a href="#" class="btn custom-btn btn-primary btn-lg m-5"
                ><router-link
                  to="/menumaker"
                  style="text-decoration: none; color: inherit"
                  >Get Started</router-link
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_view",
};
</script>
<style>
.custom-btn {
  font-size: 2rem; /* Custom button font size */
  background-color: brown;
  border-color: brown;
}
.custom-card-title {
  font-size: 2.5rem;
  color: #007bff; /* Blue color for the title */
}
</style>
