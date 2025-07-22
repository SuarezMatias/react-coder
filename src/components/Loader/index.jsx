import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Spinner animation="border" role="status" variant='warning'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;