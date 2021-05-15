
const path = require("path");
let noteData = require('../db/db.json');
const fs = require("fs");
// for generating random number
const random = require('random')



module.exports = function (app){
    app.get('/api/notes', (req, res) => {
        // res.json(noteData);
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(data);
         
        
    });


    app.post("/api/notes", (req, res) =>{
        
        let newNote = req.body;
        // console.log(newNote);

        console.log(random.int(0, 100)) ;

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