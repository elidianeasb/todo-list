const mongoose = require("mongoose");


//Conectanto ao MongoDG

const DB_PASSWORD = process.env.PASSWORD;
const MONGO_URI= `mongodb+srv://elidianeasb:${DB_PASSWORD}@cluster0.3hit6tl.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI) //esse link foi gerado pelo atlas
.then(() => {
    console.log("Connected to MongoDB!")
})
.catch((error) => console.log("Error connecting to mongo: ", error))