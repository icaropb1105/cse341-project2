const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProduct } = require('../middleware/validate');
const auth = require('../middleware/auth');

// Rotas públicas 
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Rotas protegidas
router.post('/', auth, validateProduct, productController.createProduct);
router.put('/:id', auth, validateProduct, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
