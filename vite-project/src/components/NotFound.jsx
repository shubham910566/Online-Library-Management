import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found 🚫</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
