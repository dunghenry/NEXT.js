import Layout from '../../components/Layout';
import Card from 'react-bootstrap/card'
import {getPosts} from '../../lib/post';

const Posts = ({posts}) => {
    
  return <Layout>
      <h1>Posts Page</h1>
      {
          posts.map(post =>(
              <Card key={post.id}>
                  <Card.Body>
                      <Card.Title>
                          {post.title}
                      </Card.Title>
                      <Card.Text>
                          {post.body}
                      </Card.Text>
                  </Card.Body>

              </Card>
          ))
      }
  </Layout>;
};

export const getStaticProps = async () =>{
    const posts = await getPosts();
    return{
        props:{
            posts
        }
    }
}

export default Posts;
