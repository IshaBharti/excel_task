const csvtojson = require("csvtojson");
const mongodb = require("mongodb");
const database = require("./db/database");
const fileName = "data.csv";
const User=require("./models/Schema")
var arrayToInsert = [];
csvtojson()
  .fromFile(fileName)
  .then((source) => {
    for (var i = 0; i < source.length; i++) {
      var oneRow = {
        firstName: source[i]["Firstname"],
        lastName: source[i]["Lastname"],
        city: source[i]["City"],
        salary: source[i]["Salary"],
      };
      arrayToInsert.push(oneRow);
    }
   
  })
  const get_data= User.find({

  },(err,data)=>console.log("data",data));
  
