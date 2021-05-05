import { storage } from '../../../services/storage-service.js'
import { util } from '../../../services/util-service.js'


const KEY = 'notes';

const gNotes = [
  {
    id: util.makeId(4),
    type: 'NoteText',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteImg',
    info: {
      url: 'https://picsum.photos/200/300',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
  },
];

export const keepService = {
  query,
  getNoteById
}


function query(filterBy) {
  // loadBooksFromStorage();
  // if (filterBy) {
  //   const { name, price } = filterBy;
  //   const filterBooks = gNotes.filter((notek) => {
  //     return note.title.includes(name) || book.listPrice.amount < price;
  //   });
  //   return Promise.resolve(filterBooks);
  // }
  return Promise.resolve(gNotes);
}


function getNoteById(noteId) {
  const note = gNotes.find(note => noteId === note.id)
  return Promise.resolve(note);
}


function loadNotesFromStorage() {
  storage.loadFromStorage(KEY);

}