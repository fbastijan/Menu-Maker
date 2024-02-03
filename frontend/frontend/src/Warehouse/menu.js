import { Service, auth } from "./auth";

const menuHandlers = {
  async setMenu(menu) {
    let split = auth.getUser().split(" ");
    const config = {
      headers: {
        Authorization: split[1],
      },
    };
    let response = await Service.post("/api/menu", { menu }, config);
    return response;
  },
};
export { menuHandlers };

/*
let menu = {
    name:
    types:[]
}
*/
