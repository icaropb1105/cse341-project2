const Order = require('../models/orderModel');

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('products');
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
