import { util } from '../../../services/util-service.js'

export const originalNotes = [
  {
    id: util.makeId(4),
    type: 'NoteText',
    isPinned: false,
    info: {
      title: 'Fullstack Me Baby!',
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: util.makeId(4),
    type: "NoteVideo",
    isPinned: false,
    info: {
      url: 'TAqZb52sgpU'
    }
  },
  {
    id: util.makeId(4),
    type: 'NoteImg',
    isPinned: false,
    info: {
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteTodos',
    isPinned: false,
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
  },
];