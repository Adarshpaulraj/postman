const mongoose=require('mongoose')
const DB=require('../common/dbConfig')

try {
    console.log(`${DB.dbUrl}/${DB.dbName}`) 
    mongoose.connect(`${DB.dbUrl}/${DB.dbName}`) 
} catch (error) {
    console.log(error)
}
module.exports= mongoose

