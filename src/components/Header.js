import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Music</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Fitness</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Lifestyle</Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
    </>
  );
};
export default Header;
