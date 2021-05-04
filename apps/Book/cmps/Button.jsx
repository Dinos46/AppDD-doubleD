const { Link } = ReactRouterDOM;
export function Button({ txt, routTo }) {
  return (
    <button className='btn'>
      <Link to={routTo}> {txt} </Link>
    </button>
  );
}
