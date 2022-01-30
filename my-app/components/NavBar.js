import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
       <Link href="/" passHref><Navbar.Brand >My app</Navbar.Brand></Link>
        <Nav>
            <Link href="/posts" passHref>
            <Nav.Link>Posts</Nav.Link>
            </Link>
            <Link href="/jokes/random"  passHref>
                <Nav.Link>Jokes</Nav.Link>
            </Link>
            <Link href="/books"  passHref>
                <Nav.Link>Books</Nav.Link>
            </Link>
            <Link href="/about"  passHref>
                <Nav.Link>About</Nav.Link>
            </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
