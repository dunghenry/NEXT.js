import Layout from '../../components/Layout';
import Card from'react-bootstrap/Card';
import { getPosts } from '../../lib/post';
import Link from 'next/link';
export default function Posts({posts}) {
  return (
    <Layout>
      <h1>Posts Page</h1>
      <div>
        {
          posts.map(post =>{
            return(
              <Card key={post.id} className="my-3 shadow">
                <Card.Body>
                  <Card.Title>{post.id} -- { post.title}</Card.Title>
                  <Card.Text>Body: {post.body}</Card.Text>
                  <Link href={`/posts/${post.id}`} passHref>
                    <Card.Link>See more</Card.Link>
                  </Link>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts
    }
  }
}