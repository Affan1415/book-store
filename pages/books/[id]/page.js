import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Fetch individual book details based on the ID
export default function BookDetails() {
    const router = useRouter();
    const { id } = router.query; // Get the dynamic route parameter
    const [book, setBook] = useState(null);

    // Fetch book data from API
    useEffect(() => {
        if (id) {
            fetch(`/api/books`)
                .then((res) => res.json())
                .then((data) => {
                    const bookData = data.find((book) => book.id === parseInt(id));
                    setBook(bookData);
                });
        }
    }, [id]);

    // If no book is found
    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-lg">Author: {book.author}</p>
            <p className="mt-4">Book ID: {book.id}</p>
        </div>
    );
}
