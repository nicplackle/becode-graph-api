const notes = document.querySelector("#notes");
const editor = document.querySelector("#editor");

// ----- load user's saved notes

for (let i = 0; i < window.localStorage.length; i++) {
  const newNote = document.createElement("option");
  newNote.innerText = window.localStorage.key(i);
  notes.appendChild(newNote);
}
changNote();

// -------- check for empty not title

function checkEmpty() {
  if (notes.length === 0) {
    const untitled = docuement.createElement("option");
    untitled.innerText = "untitled";
    notes.appendChild(untitled);
  }
}

// ---- save editor text to storage under current note

function saveNote() {
  window.localStorage.setItem(notes.nodeValue, editor.value);
}

// ----- change editor text to the currently selected note

function changeNote() {
  editor.value = window.localStorage.getItem(notes.value);
}

// ------ ask the user to name their new note, then create it
// ------ add this note to the select div then focus to it

function newNote() {
  const note = prompt("Name of note?");
  window.localStorage.setItem(note, "");

  const noteElem = document.createElement("option");
  noteElem.innerText = note;
  notes.insertBefore(noteElem, notes.firstChild);

  // focus this note
  notes.value = note;
  changeNote();
}
