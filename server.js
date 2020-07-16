// consts
const express= require("express");

//express app
const app= express();


//PORT
const PORT = process.env.PORT || 8090;


//Use Express
app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
require("./routes/apiRoute.js")(app);
require( "./routes/htmlRoute.js")(app);

// Listen 
app.listen(PORT, function(){ console.log("App is listening on PORT: " + PORT) })