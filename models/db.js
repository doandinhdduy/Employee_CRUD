const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"
const url = "mongodb+srv://duybang:dinhduy2002@cluster0.6frlh9s.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
        console.log("An Error Occured");
    }
})

require('./employee.model');
require('./toy.model');