const { body, validationResult } = require('express-validator');

const validateProduct = [
  body('name').notEmpty(),
  body('description').notEmpty(),
  body('price').isNumeric(),
  body('category').notEmpty(),
  body('stock').isInt(),
  body('brand').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateProduct
};
