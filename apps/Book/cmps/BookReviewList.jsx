import { BookReviewPreview } from './BookReviewPreview.jsx'

export function BookReviewList(props) {
  const bookReviews = props.reviews;
  if (!bookReviews) return <h3>no reviews...</h3>;

  return (

    <section className="review-list flex">
      <h2>reviews</h2>
      {bookReviews.map((review, idx) => <BookReviewPreview key={`review${idx}`} review={review} />)}
    </section>
  );
}
