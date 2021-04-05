const fs = require("fs");
const reader = require('readline-sync');

exports.logInput = function(data){
    let records = reader.question('Enter the number of records you want to store ');
    for (let i = 0; i < records; i++) {       
        let fname = reader.question("Enter the first name ");
        let lname = reader.question("Enter the last name ");      
        let salary = reader.question("Enter the salary ");
        let email = reader.question("Enter your email ")

        debugger;
        var time =  new Date().toLocaleString();
                
        debugger;
        data.users.push({fname, lname, salary, email, time});
                    
        }
}

exports.writeToJson = function(data, jsonFile){
    debugger;
    var userString = JSON.stringify(data);        
    fs.writeFile(jsonFile, userString, (err)=>{
        if(!err){
            console.log("Records stored successfully")
        }
    });
}
