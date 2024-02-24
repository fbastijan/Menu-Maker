import { Service, auth } from "./auth";

let splitHeader = () => {
  let splitted = auth.getUser();
  return splitted;
};
const imageHandlers = {
  async prenesiSliku(menuId, imageUrl) {
    console.log(menuId, imageUrl);
    try {
      const config = {
        headers: {
          Authorization: splitHeader(),
        },
      };
      await Service.post(
        "api/image/upload",
        { menuId: menuId, image: imageUrl },
        config
      );
    } catch (e) {
      console.log(e);
      return;
    }
  },
  async dohvatiSliku(id) {
    let result = await Service.get(
      "/api/image/download",

      {
        params: { id: id },
      }
    );
    console.log(id);
    return result;
  },
};
export { imageHandlers };
