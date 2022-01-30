import { getPostIds, getPostById } from "../../lib/post";
import Layout from "../../components/Layout";
import Card from "react-bootstrap/card";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import {useRouter} from "next/router";
import Spinner from "react-bootstrap/Spinner";
import spinnerStyles from '../../styles/Spinner.module.css'
const Post = ({ post }) => {
  const router = useRouter();
  if(router.isFallback){
    return(
      <Spinner animation="border" role="status" variant="dark" className={spinnerStyles.spinnerLg}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
