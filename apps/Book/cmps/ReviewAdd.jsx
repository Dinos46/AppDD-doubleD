import { bookService } from '../services/books-service.js'

export class ReviewAdd extends React.Component {

    state = {
            rating: 0,
            readDate: '',
            userName: '',
            userTxt: '',
            bookId: this.props.book.id
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

   

    onSubmitReview = (ev)=>{
        ev.preventDefault();
        bookService.saveReview(this.state, this.state.bookId)
        this.props.toggleReviews();
    }

    render(){
        const {userName, readDate} = this.state;
        return (
                <form className="review-panel flex" onSubmit={this.onSubmitReview}>
                    <h3>comment</h3>
                    <input type="text" name="userName" value={userName} placeholder="name" onChange={this.handleChange}/>

                    <label htmlFor="date-picker">read at</label>
                    <input type="date" id="date-picker" name="readDate" value={readDate} onChange={this.handleChange}/>

                <div className="star-rating flex">
                    {[...Array(5)].map((star, idx)=>{
                        const ratingVal = idx + 1;
                        return <label htmlFor={`star${idx+1}`} key={idx}>
                        <input name="rating" type="radio" key={idx} id={`star${idx+1}`} value={ratingVal} onChange={this.handleChange}/>
                            <i className={`fas fa-star pointer ${ratingVal <= this.state.rating ? 'yellow' : 'grey'}`}></i>
                        </label>
                    })}
                </div>
                    <textarea name="userTxt" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
                    <button>send</button> 
                </form>
        )
    }
}