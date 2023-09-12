const Product = require('../models/Product')
const { getAll, get, create, update, remove } = require('../utils/handlerFunctions')
const catchAsync = require('../utils/catchAsync')


exports.getAllProducts = catchAsync(getAll(Product));
exports.getProduct = catchAsync(get(Product))
exports.createProduct = catchAsync(create(Product));
exports.updateProduct = catchAsync(update(Product))
exports.deleteProduct = catchAsync(remove(Product))

exports.expiredProducts = catchAsync(async (req, res, next) => {
    

        const products = await Product.find().where('expiryDate').lte(new Date())

        
        res.status(200).json({
            status: "Success",
            products
        })
    
})

exports.expiringInThirtyDays = catchAsync(async (req, res, next) => {

   
    let date = new Date(); // Now
    date.setDate(date.getDate() + 30); // Set now + 30 days as the new date

    const products = await Product.find().where('expiryDate').gte(new Date()).lte(date)


    //const products = await Product.find()
    res.status(200).json({
        status: "Success",
        products
    })



})


exports.expiringInSixtyDays = catchAsync( async (req, res, next) => {
   

        let date = new Date(); // Now
        date.setDate(date.getDate() + 60); // Set now + 60 days as the new date

        const products = await Product.find().where('expiryDate').gte(new Date()).lte(date)



        res.status(200).json({
            status: "Success",
            products
        })
    
   
})

