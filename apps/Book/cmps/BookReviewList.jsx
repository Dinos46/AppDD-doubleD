import {BookReviewPreview} from './BookReviewPreview.jsx' 


export function BookReviewList(props) {
  
  console.log('in reviews' ,props.reviews)
    if(!props.reviews) return <h3>no reviews...</h3>
  
  return (
    <div className='user-review'>
      <h3>coment</h3>
     <BookReviewPreview />

    </div>
  );
}
 