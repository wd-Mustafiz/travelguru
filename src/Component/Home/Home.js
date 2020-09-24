import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../Navbar/Menu";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Container fluid="md">
        <Menu></Menu>
      </Container>
    </div>
  );
};

export default Home;
