import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="nav"
      style={{
        padding: '1rem',
        backgroundColor: '#eee',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-around', // Space between links
        width: '100%', // Ensures full-width navbar
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
};

export default Navbar;