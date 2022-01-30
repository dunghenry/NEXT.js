import Layout from "../../components/Layout";
import Card from "react-bootstrap/card";
import { getPosts } from "../../lib/post";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`posts/${post.id}`}>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
    revalidate: 1
  };
};

export default Posts;
