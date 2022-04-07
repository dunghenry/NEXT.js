
import Layout from '../../components/Layout';
import { getRandomJoke } from '../../lib/joke';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button'
const Random = ({joke}) => {
   
  return (
      <Layout>
          <h1>Jokes Random Page</h1>
          <Card className='my-3 shadow'>
      <Card.Body>
          <Card.Title>{`Here's your random joke for today`}</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href='/'>
              <Button variant='dark'>Back</Button>
          </Link>
      </Card.Body>
  </Card>
    </Layout>
  )
}
export const getServerSideProps = async () => {
    let joke = await getRandomJoke();
    if (!joke) {

        // return {
        //     notFound: true
        // }
        
        return{
            redirect: {
                destination: '/posts',
                permanent: false
            }
        }
    }
    return{
        props: {
            joke
        }
    }
}
export default Random;