import { books } from '../../../database/books';
export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200)
            .json(books)
    } else if (req.method === 'POST') {
        console.log(req.body);
        const title = req.body.title
        const pages = req.body.pages
        const language = req.body.language
        const newBook = {
            id: Math.floor(Math.random() * 10000),
            title,
            pages,
            language
        }
        books.push(newBook);
        res.status(201)
            .json(newBook)
    }
}