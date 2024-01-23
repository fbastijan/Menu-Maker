const express = require("express");
const router = express.Router();
const { client, connectToMongoDB } = require("../../database");
const { verifyToken } = require("../../middlewares/userMiddlewares");

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

router.get("/menu/:userId", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menu");
    try {
      let type = req.query.type;
      let result = await collection
        .find(
          {
            userId: req.params.userId,
            "current.items.categoriesIndex": type,
          },
          { projection: { "current.items.$": 1 } }
        )
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
    collection
      .insertOne(newMenu)
      .then((user) => {
        return res.status(201).json({
          success: "true",
          msg: "Dodao si menu",
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
router.post("/menu/:id/item", verifyToken, async (req, res) => {
  const db = await connectToMongoDB();
  const collection = db.collection("menuItems");
  let pom = req.body.items.forEach((element) => {
    element.menuId = req.params.id;
  });
  collection
    .insertMany(pom)
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
router.post("/menu/:id/backup", verifyToken, async (req, res) => {});
//dodavanje na menu
router.patch("/menu");
module.exports = router;
