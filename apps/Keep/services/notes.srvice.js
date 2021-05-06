import { util } from '../../../services/util-service.js'

export const originalNotes = [
    {
      id: util.makeId(4),
      type: 'NoteText',
      isPinned: false,
      info: {
        txt: 'Fullstack Me Baby!',
      },
    },
    { 
      id: util.makeId(4),
      type: 'NoteImg',
      isPinned: false,
      info: {
        url: 'https://picsum.photos/200',
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