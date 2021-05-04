// import {util} from './util-service.js'
import {storage} from '../../../services/storage-service.js'
import {originalBooks} from './books.data.service.js'

export const bookService = {
  query,
  getNxtBookId,
  getBookById,
  saveReview,
  loadBooksFromStorage
};

const KEY = 'books';

const gBooks;

function saveReview(review, bookId){
  const bookIdx = gBooks.findIndex(book => book.id === bookId)
  if(!gBooks[bookIdx].reviews) gBooks[bookIdx].reviews = [];
    gBooks[bookIdx].reviews.push(review)
    storage.saveToStorage(KEY, gBooks);
}

function loadBooksFromStorage(){
    let books = storageService.loadFromStorage(KEY)
    if (!books) books = originalBooks;
    gBooks = books
    storageService.saveToStorage(KEY, gBooks)
}

function query(filterBy) {
  if (filterBy) {
    const { name, price } = filterBy;
    const filterBooks = gBooks.filter((book) => {
      return book.title.includes(name) || book.listPrice.amount < price;
    });
    return Promise.resolve(filterBooks);
  }
  return Promise.resolve(gBooks);
}

function getNxtBookId(bookId) {
  const bookIdx = gBooks.findIndex((book) => bookId === book.id);
  let nxtBookIdx = bookIdx + 1;
  nxtBookIdx = nxtBookIdx === gBooks.length ? 0 : nxtBookIdx;
  return gBooks[nxtBookIdx].id;
}

function getBookById(bookIdx) {
  var book = gBooks.find(function (book) {
    return bookIdx === book.id;
  });
  return Promise.resolve(book);
}

// function getNextPage() {
//   gPageIdx++;
//   if (gPageIdx * PAGE_SIZE >= gBooks.length) {
//       gPageIdx = 0;
//   }
// }

// function setSort(sortBy) {
//   gSortBy = sortBy;
//   sortBooksBy(gSortBy);
// }

// function sortBooksBy(gSortBy){
//   gBooks.sort(function (book1, book2) {
//       if(book1[gSortBy] > book2[gSortBy]) return 1;
//       if(book2[gSortBy] > book1[gSortBy]) return -1;
//       return 0;
//   })
// }

// function rateBook(count, bookIdx) {
//   var bookIdx = gBooks.findIndex(function (book) {
//       return bookIdx === book.id;
//   })
//   gBooks[bookIdx].rate = count;
//   _saveBookToLocalStorage();
// }

// function updateBook(bookId, bookPrice) {
//   var bookIdx = gBooks.findIndex(function (book) {
//       return bookId === book.id;
//   })
//   gBooks[bookIdx].price = bookPrice;
//   _saveBookToLocalStorage();
// }

// function removeBook(bookId) {
//   var bookIdx = gBooks.findIndex(function (book) {
//       return bookId === book.id;
//   })
//   gBooks.splice(bookIdx, 1);
//   _saveBookToLocalStorage();
// }
