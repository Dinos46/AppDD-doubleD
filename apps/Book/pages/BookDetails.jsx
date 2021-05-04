import { Button } from '../cmps/Button.jsx'
// import { ReadMore } from '../cmps/ReadMore.jsx';
import { bookService } from '../services/books-service.js';
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'
import { BookReviewList } from '../cmps/BookReviewList.jsx'

const { Link, Route } = ReactRouterDOM;

export class BookDetails extends React.Component {
  state = {
    book: null,
    isCommentShown: false,
  };

  componentDidMount() {
    this.loadBook();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
  //     this.loadBook();
  //   }
  // }

  loadBook = () => {
    const id = this.props.match.params.bookId;
    bookService.loadBooksFromStorage();
    bookService.getBookById(id).then((book) => {
      if (!book) return this.props.history.push('/');
      this.setState({ book }, () => {
        this.setBookProperties(book);
      });
    });
  };

  setBookProperties = (book) => {
    this.readTime(book);
    this.published(book);
    this.priceColor(book);
    this.setCurrency(book);
  };

  readTime = (book) => {
    if (book.pageCount > 500) this.setState({ pageCount: 'Long reading' });
    else if (book.pageCount > 200)
      this.setState({ pageCount: 'Decent Reading' });
  };

  published = (book) => {
    const curYear = new Date().getFullYear();
    if (curYear - book.publishedDate > 10)
      this.setState({ bookCondition: 'Veteran Book' });
    if (curYear - book.publishedDate < 2)
      this.setState({ bookCondition: 'New!' });
  };

  priceColor = (book) => {
    if (book.listPrice.amount > 150) this.setState({ priceClass: 'red' });
    if (book.listPrice.amount < 20) this.setState({ priceClass: 'green' });
  };

  setCurrency = (book) => {
    switch (book.listPrice.currencyCode) {
      case 'EUR':
        this.setState({ currency: '₤' });
        break;
      case 'USD':
        this.setState({ currency: '$' });
        break;
      case 'ILS':
        this.setState({ currency: '₪' });
        break;
    }
  };

  onToggleReviewSection = () => {
    const { isCommentShown } = this.state;
    if (!isCommentShown) this.setState({ isCommentShown: true }, () => {});
    if (isCommentShown) this.setState({ isCommentShown: false });
  };

  render() {
    const { book } = this.state;
    console.log('inside render',book)
    if (!book) return <h2>loading</h2>;
    return (
      <section className='card grid'>

        <section className='card-details flex'>
          <h2>{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <ul className='card-details flex'>
            <li>{`categories: ${book.categories.join(', ')}`}</li>
            <li>{`page count:${book.pageCount} ${this.state.pageCount}`}</li>
            <li>
              {' '}
              {`published date: ${book.publishedDate} ${this.state.bookCondition}`}{' '}
            </li>
            <li className={this.state.priceClass}>
              {`price: ${this.state.currency}${book.listPrice.amount}`}
              {book.listPrice.isOnSale && (
                <span className='sale'>on sale!!</span>)}
            </li>
            <li>
              {' '}
              {`description: ${book.description.slice(0, 100)} `}
              {/* <ReadMore text={book.description} isLongTxtShown={this.state.isLongTxtShown} /> */}
            </li>
          </ul>
          <Button txt={'next book'}
            routTo={`/book/${bookService.getNxtBookId(book.id)}`}/>
        </section>

        <div className='card-img-container'>
          <img src={book.thumbnail} alt='book cover' />
        </div>

        <section className='reviews'>
          coments
          <BookReviewList reviews={book} />
        </section>

        <section className='add-comment flex'>
          <button onClick={this.onToggleReviewSection}>add</button>
          {this.state.isCommentShown && (
            <ReviewAdd key={book.id} book={book}
              toggleReviews={this.onToggleReviewSection}/>)}
        </section>
      </section>
    );
  }
}
