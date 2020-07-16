const fs= require("fs");

//NoteData
const noteData = require("../db/db.json");
const dB = "../db/db.json";


//Route
module.exports = function(app){
    
    
    //GET
    app.get("/api/notes", (req,res) => {
        res.json(noteData)
    });

    app.get("/api/notes/:id", (req, res)=>{
        res.json(noteData.id)
    });


    //Post
    app.post("/api/notes", function(req, res){
        const noteNew ={
            id: noteData.length +1,
            title: req.body.title,
            text: req.body.text
        };

        //push into array & writeFile
        noteData.push(noteNew);
        fs.writeFile(dB,JSON.stringify(noteData), ()=>{
            console.log("New Note!")
        });
        res.json(noteNew);

    });


    //Delete
    app.delete("/api/notes", function(req, res){
        const arr= req.params.id -1;

        //Splice
        noteData.splice(arr,1);
        for( let i=1; i< noteData.length; i++){
            noteData[i].id = i+1;
        }
        //write
        fs.writeFile(dB,JSON.stringify(noteData),()=>{console.log("Deleted note. Hope ya didn't need that")});
        res.json(true);
        res.json(noteData)
    });
}

   