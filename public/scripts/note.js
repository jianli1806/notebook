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


document.getElementById('notesubmit').addEventListener('submit', printNote);


function printNote(e) {
    e.preventDefault();
    let notecontent = document.getElementById('notecontent').value;
    const note = new Note('101', notecontent);
    console.log(note);

}

