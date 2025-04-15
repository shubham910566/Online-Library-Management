import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Browse Books {category && `- ${category}`}</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />

      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id} style={{ marginBottom: '10px' }}>
              <strong>{book.title}</strong> by {book.author} –&nbsp;
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
};

export default BrowseBooks;