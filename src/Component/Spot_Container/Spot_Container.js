import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Single_spot from "../Single_spot/Single_spot";

const Spot_Container = () => {
  const Spots = [
    {
      id: 1,
      name: "Cox Bazar",
      img: "https://i.imgur.com/Do5PJb7_d.webp?maxwidth=728&fidelity=grand",
    },

    {
      id: 2,
      name: "Sreemongal",
      img: "https://i.imgur.com/GBquF2P_d.webp?maxwidth=728&fidelity=grand",
    },
    {
      id: 3,
      name: "Sundarban",
      img: "https://i.imgur.com/v5C7uQE_d.webp?maxwidth=728&fidelity=grand",
    },
  ];
  return (
    <Container style={{ marginTop: "80px" }}>
      <Row>
        {Spots.map((spot) => (
          <Col>
            <Single_spot spot={spot} key={spot.id}></Single_spot>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Spot_Container;
