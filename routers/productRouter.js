const { getAllProducts,getProduct,createProduct,updateProduct,deleteProduct, convertDate, expiredProducts,expiringInThirtyDays,expiringInSixtyDays } = require('../controllers/productController');    



const router = require('express').Router()
router.route('/').get(getAllProducts).post(createProduct);
router.route('/list-expired-products').get(expiredProducts);
router.route('/list-expiringIn30-products').get(expiringInThirtyDays);
router.route('/list-expiringIn60-products').get(expiringInSixtyDays);

router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);


module.exports = router;