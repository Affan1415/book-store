import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p>{book.description}</p>
            <Link href={`/books/${book.id}`}>
              <a className="text-blue-500">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
