const express = require('express');
const app = express();


const productRouter = require('./routers/productRouter')

app.use(express.json())


app.use('/api/v1/product',productRouter)
app.all('*',(req,res,next)=>{
    const err = new Error(`This route ${req.originalUrl}  is not available`)
    next(err)
})
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(400).json({
        status:"Error",
        message:err.message,
        

})
})



module.exports = app;