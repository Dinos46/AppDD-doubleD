import { storage } from '../../../services/storage-service.js'
import { originalNotes } from './notes.srvice.js'


const KEY = 'notes';

let gNotes;

export const keepService = {
  query,
  getNoteById,
  removeNote,
  togglePinedNote,
  addNote
}


function query(filterBy) {
  loadNotesFromStorage()
  // if (filterBy) {
  //   const { name, price } = filterBy;
  //   const filterBooks = gNotes.filter((notek) => {
  //     return note.title.includes(name) || book.listPrice.amount < price;
  //   });
  //   return Promise.resolve(filterBooks);
  // }
  return Promise.resolve(gNotes);
}


function removeNote(noteId) {
  const noteIdx = gNotes.findIndex(note => noteId === note.id)
  gNotes.splice(noteIdx, 1)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}

function addNote(note){
  console.log(note)
}

function editNote(note){
  console.log('Service', note)
}

function togglePinedNote(noteId, note){
  const noteIdx = gNotes.findIndex(note => noteId === note.id)
  gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned
  if(gNotes[noteIdx].isPinned) gNotes.unshift(note)
  storage.saveToStorage(KEY, gNotes)
  return Promise.resolve()
}


function _updateNote(noteToUpdate) {
  var noteIdx = gNotes.findIndex(note => {
    return note.id === noteToUpdate.id;
  })
  gNotes.splice(noteIdx, 1, noteToUpdate)
  // _saveNotesToStorage();
  return Promise.resolve(noteToUpdate)
}

// function _addNote(noteToAdd) {
//   const note = _createCar(carToAdd.vendor, carToAdd.speed)
//   gCars.unshift(noteToAdd)
//   _saveNoteToStorage();
//   return Promise.resolve(car)
// }

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