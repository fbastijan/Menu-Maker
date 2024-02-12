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
  async getMenuItems(menuId) {
    let response = await Service.get(`/api/menu/item/${menuId}`);
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
  async updateMenuItem(itemId, menuItemChanges) {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };
    console.log(menuItemChanges);
    let response = await Service.patch(
      `/api/menu/item/${itemId}`,
      { ...menuItemChanges },
      config
    );
    return response;
  },

  async searchByAndPaginate(menuId, type, subtype, pageNumber) {
    let response = await Service.get(
      `/api/menu/${menuId}/items`,

      {
        params: {
          type,
          subtype,
          pageNumber,
        },
      }
    );
    return response;
  },

  async deleteItem(itemId) {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };
    let response = await Service.delete(`/api/menu/item/${itemId}`, config);
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
