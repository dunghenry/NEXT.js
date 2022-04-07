import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
const Books = () => {
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState("")
    const [lan, setLan] = useState("")
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get('/api/books');
        setBooks(response.data);
    }
    useEffect(() => {
        fetchBooks();
        return () => {
            console.log("Re-Render");
        }
    }, []);
    console.log("Render");
    const submitBook = async () => {
        const newBook = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            pages: pages,
            lan
        }
        await axios.post('http://localhost:3000/api/books', newBook);
    }
    return (
        <Layout>
            <h1>Books Page</h1>
            <div align="center">
                {"Title: "}<input
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <br />
                {"Pages: "}<input
                    type='text'
                    value={pages}
                    onChange={e => setPages(e.target.value)}
                />
                <br />
                {"Language: "}<input
                    type='text'
                    value={lan}
                    onChange={e => setLan(e.target.value)}
                />
                <br />
                <button onClick={submitBook}>Submit book</button>
            </div>
            <div align="center">
            </div> {
                books?.map(book => {
                    return (
                        <div align="center" key={book.id}>
                            {book.id}.<br />
                            {"Title: "}{book.title}.<br />
                            {"Pages: "} {book.pages}.<br />
                            {"Language: "}{book.language} <br />
                            <hr />
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export default Books;