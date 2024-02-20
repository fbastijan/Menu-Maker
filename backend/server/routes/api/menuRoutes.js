const express = require("express");
const router = express.Router();
const { client, connectToMongoDB } = require("../../database");
const { verifyToken } = require("../../middlewares/userMiddlewares");
const { ObjectId } = require("mongodb");

const PAGE_SIZE = 10;
//paginirano traženje item-a

router.get("/menu/:menuId/items", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menuItems");
    let menuId = req.params.menuId;
    let { pageNumber, type, subtype } = req.query;
    let pomPage = parseInt(pageNumber) || 1;

    // Query condition based on type and subtype
    const query = {};
    query.menuId = menuId;
    if (type) {
      query.type = type;
    }
    if (subtype) {
      query.subtype = subtype;
    }

    const totalItems = await collection.countDocuments(query);

    const totalPages = Math.ceil(totalItems / PAGE_SIZE);
    if (pomPage < 1) {
      pomPage = 1;
    } else if (pomPage > totalPages && totalPages != 0) {
      pomPage = totalPages;
    }

    const items = await collection
      .find(query)
      .skip((pomPage - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .toArray();

    const hasNextPage = pomPage < totalPages;
    const hasPrevPage = pomPage > 1;

    res.json({ items, hasNextPage, hasPrevPage });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// traženje mernu-a na bazi usera
router.get("/menu/:userId", async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menu");
    try {
      console.log(req.params.userId + "to je to");
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

// brisanje item-a iz baze
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

//dohvacanje svih item-a na menu
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
router.put("/menu", verifyToken, async (req, res) => {
  let newMenu = {
    userId: req.userId,
    ...req.body,
  };
  let pom = newMenu;
  console.log(pom.menu);
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("menu");
    const result = await collection.findOne({ userId: req.userId });
    if (result) {
      try {
        let upRes = await collection.updateOne(
          { userId: req.userId },
          { $set: { menu: newMenu.menu } }
        );
        console.log(upRes);
        return res.status(200).json({
          success: "true",
          msg: "Updateao si menu",
          id: result._id,
        });
      } catch {
        return res.status(404).json({
          success: "true",
          msg: "Nije pronađen Menu",
          id: req.userId,
        });
      }
    } else {
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
    }
  } catch {
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});

//Dodavanje tem-a na menu
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

//Updateanje Menu Itema
router.patch("/menu/item/:itemId", verifyToken, async (req, res) => {
  const { itemId } = req.params;
  const updateData = req.body;

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
