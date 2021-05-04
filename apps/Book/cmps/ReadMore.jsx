export function ReadMore({ text, isLongTxtShown }) {
    let isShown = isLongTxtShown;
    
  return (
    <span className='pointer' onClick={() => {isLongTxtShown = true;}}>
      read more
      {!isLongTxtShown && <span>{text.slice(101, text.length)}</span>}
    </span>
  );
}
