import { Service, auth } from "./auth";
let splitHeader = () => {
  let splitted = auth.getUser();
  return splitted;
};
const menuHandlers = {
  async setMenu(menu) {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };
    let response = await Service.put("/api/menu", { menu }, config);
    return response;
  },
  async getMenuItems(menuId) {
    let response = await Service.get(`/api/menu/${menuId}/item`);
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
  async getMenu() {
    let id = await this.getUserId();
    let response = await Service.get(`/api/menu/${id}`);
    return response;
  },
  async getUserId() {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };
    let response = await Service.get(`/api/user`, config);

    return response.data.user;
  },
  getStorage() {
    return localStorage.getItem("menu");
  },
  async Arhiviraj(menuId) {
    const config = {
      headers: {
        Authorization: splitHeader(),
      },
    };

    let response = await Service.post(`/api/menu/${menuId}/arhiva`, {}, config);
    return response;
  },
  async dohvatiArhivu(stranica) {
    try {
      let result = await Service.get(
        "/api/arhiva",

        {
          params: {
            pageNumber: stranica,
          },
        }
      );
      return result.data.result;
    } catch (e) {
      return [];
    }
  },
  async dohvatiItemeArhive(arhivaId) {
    try {
      let result = await Service.get(`api/arhiva/${arhivaId}/item`);
      return result.data.result;
    } catch (e) {
      return [];
    }
  },
  async dohvatiArhivuId(arhivaId) {
    try {
      let result = await Service.get(`api/arhiva/${arhivaId}`);
      return result.data.result;
    } catch (e) {
      return {};
    }
  },
};
export { menuHandlers };

/*
let menu = {
    name:
    types:[]
}
*/
