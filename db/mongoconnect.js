// getting-started.js
const mongoose = require('mongoose');
const {config}= require("../config/secret")

main().catch(err => console.log(err));
//mongodb+srv://HADAS:HADAS213@cluster0.jbkxtua.mongodb.net/
async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.jbkxtua.mongodb.net/shop`);
console.log("mongo connect")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}