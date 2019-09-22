const mongoose = require('mongoose')
//creates a scheme for author in mongoDb
const authorScheme = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }

})

//exporting the schema 'Author' is the table name created in mongoDb

module.exports = mongoose.model('Author',authorScheme)