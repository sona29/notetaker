
const path = require("path");
let noteData = require('../db/db.json');
const fs = require("fs");
// for generating random number
const random = require('random')



module.exports = function (app){
    app.get('/api/notes', (req, res) => {
        
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(data);
         
        
    });


    app.post("/api/notes", (req, res) =>{
        
        let newNote = req.body;    

        // generating random number
        newNote.id = random.int(0, 100);
        console.log("new note with id"+ newNote);

        // reading json file
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        //adding new note
        data.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);

        app.get('/api/notes', (req, res) => {
            console.log(noteData);
            res.json(noteData);
             
            
        });
    });
};