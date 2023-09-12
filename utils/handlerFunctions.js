


exports.getAll =  (Model)=>(

     async (req,res,next)=>{
            const products = await Model.find();
            res.status(200).json({
                status:"Success",
                products
            })
        }
    
)

exports.create =  (Model)=>(
   async (req,res,next)=>{
        const products = await Model.create(req.body);
        res.status(200).json({
            status:"Success",
            products
        })
    }
)

exports.get = (Model)=>(
    async (req,res,next)=>{
        const product = await Model.findById(req.params.id);
        res.status(200).json({
            status:"Success",
            product
        })
    }
)


exports.update = (Model)=>(
   async (req,res,next)=>{
        const product = await Model.findByIdAndUpdate(req.params.id,req.body,{
            runValidators:true,
            new:true
        })
        res.status(200).json({
            status:"Success",
            product

        })
    }
)

exports.remove = (Model)=>(
       async (req,res,next)=>{
        const product = await Model.findByIdAndRemove(req.params.id)
        res.status(200).json({
            status:"Success",
            product

        })
    }
)