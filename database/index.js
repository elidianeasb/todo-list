const mongoose = require("mongoose");


//Conect to MongoDG

const DB_PASSWORD = process.env.PASSWORD;
const MONGO_URI= `mongodb+srv://elidianeasb:${DB_PASSWORD}@cluster0.3hit6tl.mongodb.net/?retryWrites=true&w=majority` //atlas link

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB!")
})
.catch((error) => console.log("Error connecting to mongo: ", error))