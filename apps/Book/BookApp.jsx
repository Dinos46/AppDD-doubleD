const Router = ReactRouterDOM.HashRouter;
const { Route, Switch} = ReactRouterDOM;

import { bookService } from './services/books-service.js'
import {BookDetails} from './pages/BookDetails.jsx'
import { BookFilter } from './cmps/BookFilter.jsx'
import { BookList } from './cmps/BookList.jsx'

export class BookApp extends React.Component {
  state = {
    books: null,
    filterBy: null,
    selectedBook: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  };

  // setSelectedBook = (book) => {
  //   this.setState({ selectedBook: book });
  // };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };

  render() {
    const { books } = this.state;
    if (!books) return <h1>rendering...</h1>;
    return (
      <Router>
        <Switch>
          <Route component={BookDetails} path='/book/:bookId' />
          
        
        <section className='filter-grid-content flex'>
          <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>
          <BookList books={books} />
        </section>
      
        </Switch>
      </Router>
    );
  }
}
