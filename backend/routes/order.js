var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");

const { Orders } = require("../models");

const v = new Validator();

/* GET order. */
router.get("/", async (req, res) => {
  const orders = await Orders.findAll();
  return res.json(orders);
});

/* GET order by ID. */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const order = await Orders.findByPk(id);
  return res.json(order || {});
});

/* POST orders. */
router.post("/", async (req, res) => {
  const schema = {
    orderUserID: "number",
    orderAmount: "number",
    orderShipName: "string",
    orderShipAddress: "string",
    orderCity: "string",
    orderProvince: "string",
    orderCountry: "string",
    orderZip: "string|max:6",
    orderPhone: "string|max:13",
    orderShipping: "number|integer|positive",
    orderTax: "number|integer|positive",
    orderEmail: "string",
    orderShipped: "boolean|default:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const order = await Orders.create(req.body);

  res.json(order);
});

/* PUT order. */
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  let order = await Orders.findByPk(id);

  if (!order) {
    return res.json({ message: `Orders with id: ${id} not found.` });
  }

  const schema = {
    orderUserID: "number|optional",
    orderAmount: "number|optional",
    orderShipName: "string|optional",
    orderShipAddress: "string|optional",
    orderCity: "string|optional",
    orderProvince: "string|optional",
    orderCountry: "string|optional",
    orderZip: "string|max:6|optional",
    orderPhone: "string|max:13|optional",
    orderShipping: "number|integer|positive|optional",
    orderTax: "number|integer|positive|optional",
    orderEmail: "string|optional",
    orderShipped: "boolean|default:false|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  order = await order.update(req.body);

  res.json(order);
});

/* DELETE order. */
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const order = await Orders.findByPk(id);

  if (!order) {
    return res.json({ message: `Orders with id: ${id} not found.` });
  }

  await order.destroy();

  res.json({ message: `Orders with id: ${id}, deleted successfully.` });
});

module.exports = router;
