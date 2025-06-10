const mongoose = require("mongoose")

const connectDB = async () =>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
console.log("connected")
    }catch(e){
        console.log("MongoDB connected", e.message);
        process.exit(1);

    }
    


}
 
module.exports = connectDB;