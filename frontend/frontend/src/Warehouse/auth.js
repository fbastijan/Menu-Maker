import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000000,
});

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
    console.log(userDetail.password);
    await Service.post("/api/register", {
      email: userDetail.email,
      username: userDetail.username,
      password: userDetail.password,
      confirm_password: userDetail.confirm_password,
    });
    console.log("regao sam se ");
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

export { Service, auth };
