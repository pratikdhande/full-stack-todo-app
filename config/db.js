const mongoose = require("mongoose");

 dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) =>{
        console.log(`Connected to DB ${conn.connection.host}`)
    }).catch(() => {
        console.log("DB connection failed")
        process.exit(1)
    })
}
module.exports = dbConnect