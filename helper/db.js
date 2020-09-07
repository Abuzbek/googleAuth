const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    const db = mongoose.connection;
    db.on("open", () => {
        console.log("MongoDb Onlayn Ulandik");
    })
    db.on('error', (err) => {
        console.log("Mongoda qayerdadir Hatolik bor", err);
    })
}