const express = require("express");
const router = express.Router();
const expenseController = require("../Controllers/expense.controller");
const jwt = require("jsonwebtoken");

const validate = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const data = await jwt.decode(token);
    if (Math.round(new Date() / 1000) < data.exp) {
      next();
    } else {
      res.status(400).json({
        message: "Token Experied",
      });
    }
  } else {
    res.status(400).json({
      message: "Token Not Found",
    });
  }
};

router.post("/create/:id", expenseController.createData);

router.get("/data", validate, expenseController.getData);

router.get("/data/:id", validate, expenseController.getDataById);

router.put("/update/:id", expenseController.updateData);

router.delete("/delete/:id", expenseController.deleteData);

module.exports = router;
