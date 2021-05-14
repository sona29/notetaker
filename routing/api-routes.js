
const path = require("path");
let noteData = require('../db/db.json');
const fs = require("fs");

module.exports = function (app){
    app.get('/api/notes', (req, res) => res.json(noteData));


    app.post("/api/notes", (req, res) =>{
        
        let newNote = req.body;
        // console.log(newNote);

        // reading json file
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        //adding new note
        data.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);
    });
};