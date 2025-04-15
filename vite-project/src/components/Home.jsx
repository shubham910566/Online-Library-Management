import { Link } from "react-router-dom";
import Books from "../utils/Data";

function Home() {
  const categories = ["Sci-Fi", "Fiction", "Non-Fiction"];
  const popularBooks = Books.slice(0, 10);

  return (
    <>
      <h2 style={{display:'flex', justifyContent:'center'}}> Welcome to the Online Library 📚</h2>
      <h1>Books By Category</h1>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h1>Popular Books</h1>
      <ul>
        {popularBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} –&nbsp;
            <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
