var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");

const { Product } = require("../models");

const v = new Validator();

/* GET product. */
router.get("/", async (req, res) => {
  const products = await Product.findAll();
  return res.json(products);
});

/* GET product by ID. */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  return res.json(product || {});
});

/* POST products. */
router.post("/", async (req, res) => {
  const schema = {
    productName: "string",
    productPrice: "number|integer|positive",
    productCartDesc: "string",
    productShortDesc: "string",
    productLongDesc: "string",
    productImage: "string",
    productCategoryID: "number|integer|positive",
    productStock: "number|integer|positive",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const product = await Product.create(req.body);

  res.json(product);
});

/* PUT product. */
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  let product = await Product.findByPk(id);

  if (!product) {
    return res.json({ message: `Product with id: ${id} not found.` });
  }

  const schema = {
    productName: "string|optional",
    productPrice: "number|integer|positive|optional",
    productCartDesc: "string|optional",
    productShortDesc: "string|optional",
    productLongDesc: "string|optional",
    productImage: "string|optional",
    productCategoryID: "number|integer|positive|optional",
    productStock: "number|integer|positive|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  product = await product.update(req.body);

  res.json(product);
});

/* DELETE product. */
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.json({ message: `Product with id: ${id} not found.` });
  }

  await product.destroy();

  res.json({ message: `Product with id: ${id}, deleted successfully.` });
});

module.exports = router;
