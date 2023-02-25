const db = require("../db/db.json");
const fs = require("fs");
//const fs = require("../db/db.json");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(db);
    })


app.post("/api/notes", (req, res) => {
    const createNote = req.body;
    createNote.id = db.length + 1;
    db.push(createNote);
    fs.writeFileSync("../db/db.json", JSON.stringify(db));
    res.json(db);
});

app.delete("/api/notes/:id", (req,res) => {
    const noteId = parseInt(req.params.id);
    const dbObject = db.find( (data) => data.id === noteId)
    fs.writeFileSync("../db/db.json", JSON.stringify(db));
    res.json(dbObject);
})
};