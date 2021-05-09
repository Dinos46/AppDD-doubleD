import { util } from '../../../services/util-service.js'

export const originalNotes = [
  {
    id: util.makeId(4),
    type: 'NoteText',
    style: {
      backgroundColor: 'blue',
    },
    isPinned: false,
    info: {
      title: 'Fullstack Me Baby!',
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: util.makeId(4),
    type: "NoteVideo",
    style: {
      backgroundColor: '',
    },
    isPinned: false,
    info: {
      title: 'best band ever!!!!',
      url: 'https://www.youtube.com/embed/ODTv9Lt5WYs'
    }
  },
  {
    id: util.makeId(4),
    type: "NoteVideo",
    style: {
      backgroundColor: '',
    },
    isPinned: false,
    info: {
      title: 'friken jiren!!!!!',
      url: 'https://www.youtube.com/embed/C2uRgGDyoI0'
    }
  },
  {
    id: util.makeId(4),
    type: 'NoteImg',
    style: {
      backgroundColor: 'purple',
    },
    isPinned: false,
    info: {
      url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=',
      title: 'Me playing Mi',
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteImg',
    style: {
      backgroundColor: 'pink',
    },
    isPinned: false,
    info: {
      url: 'https://media.istockphoto.com/photos/loh-samah-bay-phi-phi-island-picture-id1134958124?k=6&m=1134958124&s=612x612&w=0&h=bnIpjy74sAcgV725V6mrDbeOGKVbMGZtH_gSF4eVEWw=',
      title: 'Thailand I miss you...',
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteTodos',
    isPinned: false,
    style: {
      backgroundColor: 'green',
    },
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteText',
    style: {
      backgroundColor: 'blue',
    },
    isPinned: false,
    info: {
      title: 'where is my life??',
      txt: 'coding academy took them...',
    },
  },
  {
    id: util.makeId(4),
    type: 'NoteTodos',
    isPinned: false,
    style: {
      backgroundColor: 'red',
    },
    info: {
      label: 'The coding academy way',
      todos: [
        { txt: 'learn react', doneAt: null },
        { txt: 'sleep', doneAt: 187111 },
        { txt: 'repeat', doneAt: 187111311 },
      ],
    },

  },
];