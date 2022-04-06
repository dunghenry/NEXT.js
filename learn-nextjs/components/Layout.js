import Head from "next/head";
import NavBar from './NavBar';
import Container from "react-bootstrap/Container";
const Layout = ({children}) => {
    return (
        <Container>
            <Head>
                <meta charset="UTF-8" />
                <meta http-httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Next.js app</title>
            </Head>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
        </Container>
    )
}

export default Layout;