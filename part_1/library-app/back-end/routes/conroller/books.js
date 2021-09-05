const booksModel = require("../../models/Books")


const addBook = (req , res) =>{

    const {title , author, pages, publisher, published_at} = req.body;

    const newBook = new booksModel ({
        title ,
        author, 
        pages, 
        publisher, 
        published_at,
        
    })


    newBook.save().then(result=>{
        res.status(201).json({success: true})
    }).catch(err => res.status(404).json({success : false}))

    

}

module.exports = {addBook}