const mongoose = require("mongoose");


    const listschema = new mongoose.Schema({
        EmployeeName: {
          type: String,
        },
        EmployeeEmail: {
          type: String,
        },
        EmployeePassword:{
          type:String
        },  
        EmployeeRole:{
          type:String
        }
      });
    //   mongoose.model("employee", listschema);

      module.exports = mongoose.model("EmployeeSignUp", listschema);

