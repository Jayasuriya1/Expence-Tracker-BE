const express = require("express");
const userModel = require("../Models/user.model");
const expenseModel = require("../Models/expense.model");

// Get All expence and income data
exports.getData = async (req, res) => {
  try {
    const data = await expenseModel.find();
    res.status(200).json({
      success: true,
      message: "Data Fetched Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

// Add expence and income data
exports.createData = async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;
    const inputData = {
      description,
      amount,
      category,
      date,
      user: req.params.id,
    };
    const data = await expenseModel.create(inputData);
    res.status(200).json({
      success: true,
      message: "Data Created Successfully",
      inputData,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

// update the expence
exports.updateData = async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    const inputData = {
      description,
      amount,
      category,
    };
    const data = await expenseModel.findOne({ _id: req.params.id });
    data.description = description;
    data.amount = amount;
    data.category = category;
    data.save();
    res.status(200).json({
      success: true,
      message: "Data Updated Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

// Delete expense data
exports.deleteData = async (req, res) => {
  try {
    const data = await expenseModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "Data Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

// Get All expence and income data by id
exports.getDataById = async (req, res) => {
  try {
    const data = await expenseModel.find({ user: req.params.id });
    res.status(200).json({
      success: true,
      message: "Data Fetched Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};
