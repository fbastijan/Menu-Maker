import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

app.use(router); // use router before mounting the app
app.mount("#app");
