import { Service, auth } from "./auth";

let splitHeader = () => {
  let splitted = auth.getUser();
  return splitted;
};
const imageHandlers = {
  async prenesiSliku(imageUrl, menuId) {
    try {
      const config = {
        headers: {
          Authorization: splitHeader(),
        },
      };
      await Service.post(
        "api/image/upload",
        { image: imageUrl, menuId: menuId },
        config
      );
    } catch (e) {
      console.log(e);
      return;
    }
  },
  async dohvatiSliku(menuId) {
    let result = await Service.get(
      "/api/image/download",

      {
        headers: {
          Authorization: splitHeader(),
        },
        params: {
          menuId: menuId,
        },
      }
    );

    return result;
  },
};
export { imageHandlers };
