import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>My Nexts.js app</h1>
        <p>This is my Next.js app</p>
        <Link href="/posts">
          <Button>Posts</Button>
        </Link>
      </Jumbotron>
    </Layout>
  )
}
