const path = require("path");
let noteData = require('../db/db.json');
const fs = require("fs");
// for generating random number
const random = require('random')



module.exports = function (app){

    //for gettting data
    app.get('/api/notes', (req, res) => {
        
        // to read file
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(data);         
        
    });

    //for posting data
    app.post("/api/notes", (req, res) =>{
        
        let newNote = req.body;    

        // generating random number
        newNote.id = random.int(0, 10000);        

        // reading json file
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        //adding new note
        data.push(newNote);
        // to write to files 
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);

        app.get('/api/notes', (req, res) => {
            
            res.json(noteData);
             
            
        });
    });

    //for deleting data
    app.delete('/api/notes/:id', (req, res) => {
        //selected note id
        let id = req.params.id;
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
       
        for(let i =0;i<data.length;i++){
           
            let idNote = data[i];

            //deleting the note that matches the selected note id
            if (idNote.id == id){
                // console.log('if');
                data.splice(i, 1);
                // to write to files 
                fs.writeFileSync('./db/db.json', JSON.stringify(data));
                res.json(data);

            }

        }
    });
};