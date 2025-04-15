import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utils/Store';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: '',
  });

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, description, rating, category } = formData;

    if (!title || !author || !description || !rating || !category) {
      setError('Please fill in all fields.');
      return;
    }

    // Rating validation
    if (isNaN(rating) || rating < 0 || rating > 5) {
      setError('Rating must be a number between 0 and 5');
      return;
    }

    const newBook = {
      ...formData,
      id: Date.now(), // unique ID
      rating: parseFloat(rating),
    };

    dispatch(addBook(newBook));
    setFormData({ title: '', author: '', description: '', rating: '', category: '' }); // Reset form
    navigate('/books');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Add New Book</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
        </div>
        <div>
          <input name="category" placeholder="Category (e.g. Fiction)" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <input name="rating" placeholder="Rating (e.g. 4.5)" value={formData.rating} onChange={handleChange} />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
