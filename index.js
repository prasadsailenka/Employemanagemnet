const server = require('./server/server')
const PORT = 8000;
const mongoose = require('mongoose')

const mongoUri = 'mongodb://localhost:27017/EmployeeManagement'

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(res=>{
    console.log("MongoDB Connected");
}).catch(err=>{
    console.log("Mongo DB Connection Error:::",err);
})


// server Start
server.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})



