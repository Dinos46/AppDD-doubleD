export function BookReviewPreview({ review }) {
  const { rating, readDate, userName, userTxt } = review;

  function addStarsRating(rating) {
    const rat = rating
    console.log(rat)
    return (
      <div>
        {[...Array(+rat)].map((star, idx) => {
          return <i className={`fas fa-star yellow`} key={`star${idx}`}></i>
        })}
      </div>
    )
  }

  return (
    <section className='review'>
      <h3>{userName}</h3>
      <p>{userTxt}</p>
      <span>{addStarsRating(rating)}</span>
      <span>{readDate}</span>
    </section>
  );
}
