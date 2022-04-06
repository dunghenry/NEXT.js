import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  return (
    <Navbar bg="dark">
      <Link href="/" passHref><Navbar.Brand className={router.pathname == "/" ? "active" : ""}>My app</Navbar.Brand></Link>
      <Nav>
        <Link href="/posts" passHref><Nav.Link className={router.pathname == "/posts" ? "active" : ""}>Posts</Nav.Link></Link>
        <Link href="/about" passHref><Nav.Link className={router.pathname == "/about" ? "active" : ""} >About</Nav.Link></Link>
        <Link href="/books" passHref><Nav.Link className={router.pathname == "/books" ? "active" : ""} >Books</Nav.Link></Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
