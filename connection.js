const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'sale_db',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log("successful")
}).catch((err)=>{   
    
    console.log(err)
    console.log('hi')
});