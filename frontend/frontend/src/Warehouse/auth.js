import axios from "axios";
import $router from "@/router";

const baseURL = "https://menu-maker-backend-1.onrender.com";
let Service = axios.create({
  baseURL: baseURL,
  timeout: 10000000,
});
Service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      auth.logout();
      $router.go();
    }
    // console.error('Interceptor', error.response);
  }
);
const auth = {
  async login(username, password) {
    let response = await Service.get("/api/login", {
      params: { username: username, password: password },
    });
    let user = response.data;
    localStorage.setItem("token", user.token);

    return true;
  },
  async signup(userDetail) {
    await Service.post("/api/register", {
      email: userDetail.email,
      username: userDetail.username,
      password: userDetail.password,
      confirm_password: userDetail.confirm_password,
    });

    return true;
  },

  logout() {
    localStorage.removeItem("token");
  },
  getUser() {
    return localStorage.getItem("token");
  },

  authenticated() {
    let user = auth.getUser();
    if (user) {
      return true;
    } else return false;
  },
};

export { Service, auth, baseURL };
