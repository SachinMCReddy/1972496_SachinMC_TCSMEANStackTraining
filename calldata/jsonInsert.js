let obj = require("mongoose");  
obj.Promise = global.Promise; 
let url = "mongodb://localhost:27017/meanstack";

const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

obj.connect(url, mongooseDbOption); 

let db = obj.connection; 
db.on("error", (err)=>console.log(err));
db.once("open", ()=>{
    let CallDataSchema = obj.Schema({
        _id: Number,
        source : String, 
        destination: String, 
        sourceLocation: String, 
        destinationLocation: String, 
        callDuration: String, 
        roaming: String, 
        callCharge: String
    });

    var call_dataObj = require('./call_data.json')
    let Call_data = obj.model("", CallDataSchema, "Call_Data");

    Call_data.collection.insertMany(call_dataObj, function(err,result) {
        if(!err){
            resultObj = JSON.stringify(result)
            console.log("Inserted all the data in the collection "+resultObj)
        }else{
            console.log(err.message)
        }
        db.close();
        })
})
