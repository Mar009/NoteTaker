//Consts
const path= require("path");


//Route to
module.exports = function(app){
    //GET
    app.get("/notes",function(req,res){
        res.sendFile(path.resolve("public", "notes.html"));
    });


    //No matching route
    app.get("*",function(req,res){
        res.sendFile(path.resolve("public", "index.html"));
    });
};