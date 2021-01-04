
var notes = require("../db/db.json")
var fs = require("fs"); 



module.exports = function(app) {
    app.get("/api/notes"), function(req, res){
    fs.readFile("./db/db.json", function(err, data) {
            if (err) throw err;
            let note = JSON.parse(data);
            console.log(note);
            return res.json(note);
    
    
        });



    }
}