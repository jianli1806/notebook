class Note {
    constructor(notecontent) {
        this.notecontent = notecontent;
    }

    getNoteContent() {
        return this.notecontent;
    }

    setNoteContent(notecontent) {
        this.notecontent = notecontent;
    }
}


// document.getElementById('notesubmit').addEventListener('submit', printNote);


// function printNote(e) {
//     e.preventDefault();
//     let notecontent = document.getElementById('notecontent').value;
//     const note = new Note('101', notecontent);
//     console.log(note);

// }

const notes = [
    {
      noteId: 12345,
      notecontent: "fdsafasdfsadf"
    },
    {
      userId: 55555,
      notecontent: "5435345345"
    },
    {
      userId: 23412,
      notecontent: "ffdssdfsfff"
    }
  ];
  
  function getAllNotes() {
    return notes;
  }
  
  
  
  module.exports = { getAllNotes };
