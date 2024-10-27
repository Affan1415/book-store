const booksData = require('../data/books.json');

export default function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json(booksData); 
    }


    return res.status(405).json({ message: 'Method Not Allowed' });
}
