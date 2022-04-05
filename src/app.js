saveTextBtn = document.querySelector('.icons')

const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
function newNote(noteBody){
  const template = `
    <p>${noteBody}<p>
  `
  return template
}

function displayNote(note) {
  const noteDisplayArea = document.querySelector('.create-note-area')
  noteDisplayArea.innerHTML = ''
  noteDisplayArea.insertAdjacentHTML('afterbegin', note)
}

function getNote (){
  const textArea = document.querySelector('.fa-solid fa-circle-plus')
  const note = textArea.value
  return note
}

function assembeNote (){
  const noteText = getNote()
  const note = newNote(noteText)
  displayNote(note)
}
saveTextBtn.addEventListener('click', assembeNote)