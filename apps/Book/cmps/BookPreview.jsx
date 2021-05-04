
const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {

  let currency;
  switch (book.listPrice.currencyCode) {
    case 'EUR':
      currency = '₤';
      break;
    case 'USD':
      currency = '$';
      break;
    case 'ILS':
      currency = '₪';
      break;
  }

  return (
    <section className='book-show flex'>
      <div className="img-container">
        <div className="overlay-bgc"></div>
      <img src={`${book.thumbnail}`} alt='book cover image' />
      </div>
      <h3>{`${book.title}`}</h3>
      <p>{`${currency} ${book.listPrice.amount}`}</p>
      <Link to={`/book/${book.id}`}>details </Link>
    </section>
  );
}
