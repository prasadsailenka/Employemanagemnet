
const listschema = require("../db/mongoquery");




exports.signup = async (data) => {

  const{EmployeeName,EmployeeEmail,EmployeePassword,EmployeeRole
  }=data.body
  const obj={EmployeeName:EmployeeName,EmployeeEmail:EmployeeEmail,EmployeePassword:EmployeePassword,EmployeeRole:EmployeeRole}
  console.log("all object", obj);
  try {
    
   
   
      const insertData = await listschema(obj);
      console.log( insertData);
      insertData.save();
      return {
        status:0,
        data: insertData,
        message: "Employee sign in completed",
      };
     
    
  } catch (error) {
    console.log("error", error);
    throw "error is sign in process";
  }
};

exports.signin = async (data) => {
  const{EmployeeEmail,EmployeePassword
  }=data.body
 
  try {
    const fetchdata = await listschema.findOne({EmployeeEmail});
    console.log("checkpassword",fetchdata.EmployeePassword);
    if (!fetchdata) {
      return({message:"this email id is not register,so please signup"})
      
    }
const checkpass= fetchdata.EmployeePassword
if (checkpass==!EmployeePassword) {
  return({status:"failed",statusCode:-1,message:"password doesn,t match,please put correct password"})
  
}
return({status:"success",statusCode:0,message:"Login successful"})
    
  
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

