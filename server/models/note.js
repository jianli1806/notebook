const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    notecontent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
  ); `
  await con.query(sql);
}
createTable();
  
// grabbing all notes in database
async function getAllNotes(note) {
  const sql = `SELECT * FROM notes where notes.userID = ${note.userID};`;
  let notes = await con.query(sql);
  console.log(notes)
}

// add notes
async function add(note) {

  const sql = `INSERT INTO notes (notecontent)
    VALUES ("${note.notecontent}") where notes.userID = ${note.userID};
  `
  await con.query(sql);
  return await read(note);
}

// Read Note
async function read(note) { 
  let cNote = await getAllNotes(note); 
  
  if(!cNote[0]) throw Error("notecontent not found");

  return cNote[0];
}

// Update Note function
async function editNote(note) {
  let sql = `UPDATE notes 
    SET notecontent = "${note.notecontent}"
    WHERE noteID = ${note=noteID}
  `;

  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete User function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}
  `
  await con.query(sql);
}

// Useful Functions
// async function getNote(note) {
//   let sql;

//   if(note.noteID) {
//     sql = `
//       SELECT * FROM notes
//        WHERE noteID = ${note.noteID}
//     `
//   } 
//   return await con.query(sql);  
// }



module.exports = { getAllNotes, add, read, editNote, deleteNote};
