import { useEffect, useState } from "react";
import { fetchBooks } from "../API";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { books } = await fetchBooks();
      setBooks(books);
    }
    fetchData();
  }, []);

  console.log(books);
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.coverimage} alt={book.title} />
            <p>By: {book.author}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
