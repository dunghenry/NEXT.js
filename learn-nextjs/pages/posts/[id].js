import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Layout from '../../components/Layout';
import { getPostIds, getPostById } from '../../lib/post';
import {useRouter} from 'next/router';
import Card from'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import spinnerStyles from '../../styles/Spinner.module.css'
const Post = ({post}) => {
  const router = useRouter();
  //Nếu trang tạm thời chưa tạo ra isFallback của router === true
  //Và trang tam thời sẽ đc render
  if (router.isFallback) {
    return(
     <div>
        <Spinner animation="border" role="status" variant="dark" className={spinnerStyles.spinnerLg}></Spinner>
       <span className={spinnerStyles.text_loading}>Loading...</span>
     </div>
    )
  }
  //Khi getStaticProps chay xong lan dau tien
  //Cac lan sau thi trang so 6 se dc dua vao danh sach prerender
  return (
      <Layout>
          <h1>Single post</h1>
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
    return{
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props: {
            post
      },
      revalidate: 1
    }
}
export default Post;
