import { bookService } from '../services/books-service.js';
import { StarsRating } from './StarsRating.jsx';

export class ReviewAdd extends React.Component {
  state = {
    rating: 0,
    readDate: '',
    userName: '',
    userTxt: '',
    bookId: this.props.book.id,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  onSubmitReview = (ev) => {
    ev.preventDefault();
    bookService.saveReview(this.state, this.state.bookId);
    this.props.toggleReviews();
  };

  render() {
    const { userName, readDate } = this.state;
    return (
      <form className='review-panel flex' onSubmit={this.onSubmitReview}>
        <h3>leave a comment</h3>
        <input
          type='text'
          name='userName'
          value={userName}
          placeholder='name'
          onChange={this.handleChange}
          required
        />

        <label htmlFor='date-picker'>read at</label>
        <input
          type='date'
          id='date-picker'
          name='readDate'
          value={readDate}
          onChange={this.handleChange}
          required
        />

        <div className='star-rating flex'>
          {[...Array(5)].map((star, idx) => {
            const ratingVal = idx + 1;
            return (
              <label htmlFor={`star${ratingVal}`} key={idx}>
                <input name='rating' type='radio' key={idx}
                  id={`star${ratingVal}`} value={ratingVal} onChange={this.handleChange} required />
                <i className={`fas fa-star ${ratingVal <= this.state.rating ? 'yellow' : 'grey'}`}></i></label>);
          })}
        </div>

        <textarea name='userTxt' cols='30' rows='10' onChange={this.handleChange} required></textarea>
        <button>send</button>
      </form>
    );
  }
}
