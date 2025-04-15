import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return (
      <div style={{ padding: '1rem' }}>
        <h2>Book Not Found</h2>
        <Link to="/books">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/books">← Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
