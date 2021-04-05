const Customer = require("./writetoJson"); 
const fs = require("fs");

let obj = {
    users: []
}

fs.exists('userJson.json', function(exists){
    if (exists) {
        console.log('Yes file exists')
        fs.readFile('userJson.json', function (err, data){
            if(err){
                console.log(err);
            }else{
                obj = JSON.parse(data)
                Customer.logInput(obj)
                Customer.writeToJson(obj, "userJson.json") 
            }
        });
    }  else {
        console.log("file not exists");
        Customer.logInput(obj)       
        Customer.writeToJson(obj, "userJson.json")
    } 
});