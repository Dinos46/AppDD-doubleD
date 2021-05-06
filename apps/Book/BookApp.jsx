
import { bookService } from './services/books-service.js'
import { BookFilter } from './cmps/BookFilter.jsx'
import { BookList } from './cmps/BookList.jsx'

export class BookApp extends React.Component {
  state = {
    books: null,
    filterBy: null
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books })
    })
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks)
  }

  render() {
    const { books } = this.state
    if (!books) return <h1>rendering...</h1>
    return (
      <section className='book-app flex'>
        <h1>Book</h1>
        <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
        <BookList books={books} />
      </section>
    )
  }
}
