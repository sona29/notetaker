const path = require("path");
let noteData = require('../db/db.json');
const fs = require("fs");
// for generating random number
const random = require('random')



module.exports = function (app){

    //for gettting data
    app.get('/api/notes', (req, res) => {
        
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(data);         
        
    });

    //for posting data
    app.post("/api/notes", (req, res) =>{
        
        let newNote = req.body;    

        // generating random number
        newNote.id = random.int(0, 1000);
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

    //for deleting data
    app.delete('/api/notes/:id', (req, res) => {
        let id = req.params.id;
        console.log('delete id  ' + id);

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        // console.log(res.json(data)); 
        for(let i =0;i<data.length;i++){
            // console.log(i);
            let idNote = data[i];
            if (idNote.id == id){

                // console.log('if');
                data.splice(i, 1);
                console.log(data);
                fs.writeFileSync('./db/db.json', JSON.stringify(data));
            }

        }
    });
};