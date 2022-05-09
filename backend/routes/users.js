var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");

const { User } = require("../models");

const v = new Validator();

/* GET users list. */
router.get("/", async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});

/* GET user by id. */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const users = await User.findByPk(id);
  return res.json(users || {});
});

/* POST user. */
router.post("/", async (req, res) => {
  const schema = {
    userEmail: "string",
    userPassword: "string",
    userRole: "boolean|optional",
    userFirstName: "string",
    userLastName: "string|optional",
    userCity: "string|optional",
    userProvince: "string|optional",
    userZip: "string|optional",
    userCountry: "string|optional",
    userPhone: "string",
    userAddress: "string|optional",
    userAddress2: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const user = await User.create(req.body);

  res.json(user);
});

/* POST user. */
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  let user = await User.findByPk(id);

  if (!user) {
    return res.json({ message: `User with id: ${id} not found.` });
  }

  const schema = {
    userEmail: "string|optional",
    userPassword: "string|optional",
    userRole: "boolean|optional",
    userFirstName: "string|optional",
    userLastName: "string|optional",
    userCity: "string|optional",
    userProvince: "string|optional",
    userZip: "string|optional",
    userCountry: "string|optional",
    userPhone: "string|optional",
    userAddress: "string|optional",
    userAddress2: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  user = await user.update(req.body);

  res.json(user);
});

/* DELETE user. */
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id);

  if (!user) {
      return res.json({ message: `User with id: ${id} not found.` })
  }

  await user.destroy();

  res.json({ message: `User with id: ${id}, deleted successfully.` })
})


module.exports = router;
