import React, { useContext } from "react";
import logo from "../../Logo.png";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { userContext } from "../../App";
const Menu = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  const gotoLogin = () => {
    history.push(`/signIn`);
  };
  return (
    <div>
      <Navbar variant="light" className="pt-3">
        <Navbar.Brand
          href="#home"
          className="bg-light px-2"
          style={{ borderRadius: "8px" }}
        >
          <img src={logo} className="img-fluid" alt="" />
        </Navbar.Brand>
        <Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search your destination"
              className="mr-sm-2 ml-5"
            />
          </Form>
          <Nav.Link href="#home" className="pl-5 text-white">
            News
          </Nav.Link>
          <Nav.Link href="#features" className="px-5 text-white">
            Destination
          </Nav.Link>
          <Nav.Link href="#pricing" className="px-5 text-white">
            Blog
          </Nav.Link>
          <Nav.Link href="#pricing" className="px-5 text-white">
            Contact
          </Nav.Link>
        </Nav>

        {loggedInUser.email ? (
          <Button variant="warning" onClick={gotoLogin} className="px-5">
            logOut
          </Button>
        ) : (
          <Button variant="warning" onClick={gotoLogin} className="px-5">
            logIn
          </Button>
        )}
      </Navbar>
    </div>
  );
};

export default Menu;
