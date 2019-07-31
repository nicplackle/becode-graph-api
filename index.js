const notes = document.querySelector("#notes");
const editor = document.querySelector("#editor");

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
