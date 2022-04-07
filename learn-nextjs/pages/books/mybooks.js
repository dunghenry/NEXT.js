import Layout from '../../components/Layout';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getBooks } from '../../lib/book';
const MyBook = ({ books }) => {
    // console.log(books)
    return (
        <Layout>
            <h1>My books Page</h1>
            {
                books.map((book, index) => {
                    return (
                        <Card key={index} className='my-3 shadow'>
                            <Card.Body>
                                <Card.Title>{book.bookName}</Card.Title>
                                <Card.Text>{book.bookContent}</Card.Text>
                                <Link href='/books'>
                                    <Button variant='dark'>Back</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Layout>
    )
}
export const getStaticProps = async () => {
    const books = await getBooks();
    return {
        props: {
            books
        }
    }
}
export default MyBook;