import {storage} from '../../../services/storage-service.js'


const KEY = 'notes';

const gNotes = [
  {
    type: 'NoteText',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    type: 'NoteImg',
    info: {
      url: 'http://some-img/me',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
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
    query
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

  function  loadNotesFromStorage(){
    storage.loadFromStorage(KEY);

  }