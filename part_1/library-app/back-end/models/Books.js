const mongoose = require("mongoose");

const Books = new mongoose.Schema({
    title: String ,
     author : String,
      pages : Number,
       publisher : String,
        published_at : String
})


const booksModel = mongoose.model("Books" , Books);

module.exports  = booksModel;