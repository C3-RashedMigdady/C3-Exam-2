
const mongoose = require ('mongoose');

const con = mongoose.connect("mongodb://localhost:27017/test" , ()=>{
    console.log("connected!!");
});

module.exports = mongoose;