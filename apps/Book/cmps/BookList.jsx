import { BookPreview } from './BookPreview.jsx'

export function BookList({ books }) {

  return (
      
      <section className='book-list grid'>
        {books.map((book) => {
            return <BookPreview book={book} key={book.id} />;
        })}
      </section>
        
    
  );
}
