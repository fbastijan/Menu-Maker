const express = require("express");
const router = express.Router();
const { client, connectToMongoDB } = require("../../database");
const { verifyToken } = require("../../middlewares/userMiddlewares");
const { ObjectId } = require("mongodb");

/*
let menu = {
user:"",
current:[],
history:{
    updated_at:"",
    state:[]
}
}

let menu_item = {
    name: "",
    price: 0.0,
    type: "",
    subtype:""
    description:""
}
*/

/*
{
    "title": "My Restaurant Menu",
    "categories":["fish", "pizza", "pasta"]
    
 

}



      {
        "name": "Spaghetti Bolognese",
        "description": "Classic Italian pasta with meat sauce",
        "price": 12.99,
        "categoriesIndex": 2  // Reference to predefined item type
      },
      {
        "name": "Custom Pasta Dish",
        "description": "User-defined pasta dish",
        "price": 15.99,
        "categoriesIndex": 2  // Reference to user-defined item type
      },
*/

router.get("/menu/:userId", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menu");
    try {
      console.log(req.params.userId);
      let result = await collection.findOne({ userId: req.params.userId });
      res.status(200).json({
        success: "true",
        msg: "pronšao si menu",
        menu: result,
      });
      return;
    } catch {
      return res.status(404).json({
        msg: "User does not have a menu or there is an error with finding it",
      });
    }
  } catch {
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});
router.delete("/menu/item/:itemId", verifyToken, async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menuItems");
    try {
      console.log("aaaaa");
      let result = await collection.deleteOne({
        _id: new ObjectId(req.params.itemId),
      });
      res.status(200).json({
        success: "true",
        msg: "uspješno si obrisao menu",
        menu: result,
      });
      return res;
    } catch (e) {
      res.status(504).json({
        success: "false",
        msg: "greška pri brisanju",
        a: result,
      });
      return res;
    }
  } catch (e) {
    res.status(500).json({
      success: "false",
      msg: e,
    });
    return res;
  }
});

router.get("/menu/item/:menuId", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menuItems");
    try {
      let result = await collection
        .find({
          menuId: req.params.menuId,
        })
        .toArray();
      res.status(200).json({
        success: "true",
        msg: "pronšao si menu",
        menu: result,
      });
      return;
    } catch {
      return res.status(404).json({
        msg: "User does not have a menu or there is an error with finding it",
      });
    }
  } catch {
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});

//inicijaliziraj menu
router.post("/menu", verifyToken, async (req, res) => {
  let newMenu = {
    userId: req.userId,
    ...req.body,
  };

  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menu");
    /*    const result = await collection.findOne({ userId: req.userId });
    if (res) {
      return result._id;
    } */
    collection
      .insertOne(newMenu)
      .then((menu) => {
        return res.status(201).json({
          success: "true",
          msg: "Dodao si menu",
          id: menu.insertedId,
        });
      })
      .catch((err) => {
        console.error("Greška pri dodavanju menu-a:", err);
        return res.status(500).json({
          msg: "Internal server error",
        });
      });
  } catch {
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});
router.post("/menu/item/:menuId", verifyToken, async (req, res) => {
  const db = await connectToMongoDB();
  const collection = db.collection("menuItems");

  req.body.menuItem.forEach((element) => {
    element.menuId = req.params.menuId;
  });

  collection
    .insertMany(req.body.menuItem)
    .then((pom) => {
      return res.status(201).json({
        success: "true",
        msg: "Dodao si item na menu" + pom,
      });
    })
    .catch((err) => {
      console.error("Greška pri dodavanju menu-a:", err);
      return res.status(500).json({
        msg: "Internal server error",
      });
    });
});
router.post("/menu/:userId/backup", verifyToken, async (req, res) => {});
//dodavanje na menu
router.patch("/menu/item/:itemId", verifyToken, async (req, res) => {
  const { itemId } = req.params;
  const updateData = req.body;
  console.log(itemId);
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menuItems");
    const result = await collection.updateOne(
      { _id: new ObjectId(itemId) },
      { $set: updateData }
    );
    console.log(result);
    return res.status(201).json({
      success: "true",
      msg: "Updateao si item na menu",
      rez: result,
    });
  } catch {
    return res.status(500).json({
      success: "false",
      msg: "Dogodila se greška pri updateanju",
    });
  }
});
module.exports = router;
