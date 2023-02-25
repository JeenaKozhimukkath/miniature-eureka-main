const fs = require('fs');
const path = require('path');
const path = require('../../../db/db.json');

function createNote(body, arrNote) {
    const note = body;
    arrNote.push(note);
    fs.writeFileSync(
        path.join(__dirname, '')
    )
}