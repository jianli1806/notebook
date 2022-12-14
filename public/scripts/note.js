import { fetchData, getCurrentUser } from './main.js'

class Note {
    constructor(userID,notecontent) {
        this.userID = userID;
        this.notecontent = notecontent;
    }

    getNoteContent() {
        return this.notecontent;
    }

    setNoteContent(notecontent) {
        this.notecontent = notecontent;
    }
}


// function printNote(e) {
//     e.preventDefault();
//     let notecontent = document.getElementById('notecontent').value;
//     const note = new Note('101', notecontent);
//     console.log(note);

// }

let notesubmit = document.getElementById('notesubmit');
if(notesubmit) notesubmit.addEventListener('submit', addNote);
let userID = getCurrentUser().userID;

function showNotes(e) {
    e.preventDefault();
    let note = new Note(userID);
    fetchData("/notes/", note, "GET")
    .then((data) => {
      let notecontent = data.notecontent;
      let p = document.getElementById("notecontent");
      p.innerText = notecontent;
    })
    .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 

    
} 

function addNote(e) {
  e.preventDefault();

  let notecontent = document.getElementById("notecontent").value;
  let note = new Note(userID, notecontent);

  fetchData("/notes/add", note, "POST")
  .then((data) => {
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 


