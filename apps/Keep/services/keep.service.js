import { storage } from '../../../services/storage-service.js'
import { originalNotes } from './notes.srvice.js'
import { util } from '../../../services/util-service.js'

const KEY = 'notes';

let gNotes;

export const keepService = {
  query,
  getNoteById,
  removeNote,
  togglePinedNote,
  addNote,
  editNote,
  addVideoNote,
  setNoteColor
}

function query(filterBy) {
  loadNotesFromStorage()
  if (filterBy) {
    const { type } = filterBy
    const filterNotes = gNotes.filter((note) => {
      return note.type.toUpperCase().includes(type)
    })
    return Promise.resolve(filterNotes)
  }
  return Promise.resolve(gNotes)
}

function removeNote(noteId) {
  const noteIdx = gNotes.findIndex(note => noteId === note.id)
  gNotes.splice(noteIdx, 1)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}

function addNote(noteToAdd) {
  noteToAdd.id = util.makeId(4)
  if (noteToAdd.type === 'NoteTodos') {
    const editNote = noteToAdd
    const dataInput = editNote.info.todos.slice(0, 1)
    const strInput = dataInput[0].txt.split(' ')
    const todosToAdd = strInput.map(txt => {
      return { txt: txt, doneAt: Date.now() }
    })
    noteToAdd.info.todos = todosToAdd
  }

  gNotes.push(noteToAdd)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}

function addVideoNote(vidNote) {
  vidNote.id = util.makeId(4)
  gNotes.push(vidNote)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}

function setNoteColor(color, noteToUpdate) {
  const curNoteIdx = gNotes.findIndex(note => note.id === noteToUpdate.id)
  noteToUpdate.style.backgroundColor = color
  console.log('SERVICE', gNotes[curNoteIdx])
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve(gNotes)
}

function editNote(noteToUpdate) {
  let val
  const noteIdx = gNotes.findIndex(note => note.id === noteToUpdate.id)
  switch (noteToUpdate.type) {
    case 'NoteTodos':
      val = noteToUpdate.label
      noteToUpdate.info.label = val
      break
    case 'NoteImg':
      val = noteToUpdate.title
      noteToUpdate.info.title = val
      break
    case 'NoteText':
      val = noteToUpdate.txt
      noteToUpdate.info.txt = val
      break
    case 'NoteVideo':
      val = noteToUpdate.url
      noteToUpdate.info.url = val
      break
  }
  gNotes.splice(noteIdx, 1, noteToUpdate)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}

function togglePinedNote(noteId, note) {
  const noteIdx = gNotes.findIndex(note => noteId === note.id)
  gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned
  if (gNotes[noteIdx].isPinned) {
    gNotes.splice(noteIdx, 1)
    gNotes.unshift(note)
  } else if (!gNotes[noteIdx].isPinned) {
    const curNoteIdx = gNotes.findIndex(note => noteId === note.id)
    gNotes.splice(curNoteIdx, 1)
    gNotes.push(note)
  }

  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}

function _updateNote(noteToUpdate) {
  var noteIdx = gNotes.findIndex(note => {
    return note.id === noteToUpdate.id;
  })
  gNotes.splice(noteIdx, 1, noteToUpdate)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve(noteToUpdate)
}

function getNoteById(noteId) {
  const note = gNotes.find(note => {
    return noteId === note.id
  })
  return Promise.resolve(note);
}

function loadNotesFromStorage() {
  let notes = storage.loadFromStorage(KEY)
  if (!notes) notes = originalNotes;
  gNotes = notes
  storage.saveToStorage(KEY, gNotes)
}