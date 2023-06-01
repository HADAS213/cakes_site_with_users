const indexR= require("./index");
const usersR= require("./users");
const cakesR= require("./cakes");
const countryR=require("./countries");


exports.routesInit =(app)=>{
    app.use("/",indexR)
    app.use("/users",usersR)
   app.use("/cakes",cakesR)
   app.use("/countries",countryR)
  
}