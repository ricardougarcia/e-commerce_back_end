const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await ProductTag.findAll({
      include: [{ model: Tag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err.message);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await ProductTag.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
    console.log(tagData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(tagData);
    console.log(tagData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err);
  }
});

// // using this to test the ID create function
// router.get("/:id", async (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
//   try {
//     const tagData = await Tag.findByPk(req.params.id);
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// });

module.exports = router;
