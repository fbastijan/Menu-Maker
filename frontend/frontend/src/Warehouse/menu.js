import { Service, auth } from "./auth";
let splitHeader = () => {
  let splitted = auth.getUser().split(" ");
  return splitted[1];
};
const menuHandlers = {
  async setMenu(menu) {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };
    let response = await Service.post("/api/menu", { menu }, config);
    return response;
  },
  async setMenuItem(menuId, menuItem) {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };
    let response = await Service.post(
      `/api/menu/item/${menuId}`,
      { menuItem },
      config
    );
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
