import express from "express";
import db from "../db/connection.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  console.log('fetch request')
  let collection = await db.collection("posts");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});
router.get("/:id", async (req, res) => {
  let collection = await db.collection("posts");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// POST
router.post("/", async (req, res) => {
  let newDocument = {
    _id: req.body._id,
    createdAt: req.body.createdAt,
    name: req.body.name,
    secondary: req.body.secondary,
    type: req.body.type,
    level: req.body.level,
    emoji: req.body.emoji,
  };

  let collection = await db.collection("posts");

  try {
    let result = await collection.insertOne(newDocument);
    if(result.acknowledged && result.insertedId) {
      res.json({acknowledged: true, insertedId: result.insertedId});
    } else {
      res.status(500).json({error: "Could not insert document"});
    }
  } catch(err) {
    console.error(err);
    res.status(500).json({error: "Could not insert document"});
  }
});


// PATCH
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    }
  };

  let collection = await db.collection("posts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("posts");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;