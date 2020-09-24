import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import "./Datepicker.css";

const spotDetails = [
  {
    name: "Cox Bazar",
    details:
      "From the early 9th century the greater Chittagong area, including Cox's Bazar, was under the rule of Arakan kings until its conquest by the Mughals in 1666 AD.[5] When the Mughal Prince Shah Shuja was passing through the hilly terrain of the present-day Cox's Bazar on his way to Arakan, he was attracted to its scenic and captivating beauty. He commanded his forces to camp there.",
  },

  {
    name: "Sreemongal",
    details:
      "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935.",
  },

  {
    name: "Sundarban",
    details:
      "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land.",
  },
];

const Datepicker = () => {
  let history = useHistory();
  const handleBook = (spotName) => {
    history.push(`/Booking/${spotName}`);
  };
  let { spotName } = useParams();
  let currentSpot;
  if (spotName === "Cox Bazar") {
    currentSpot = spotDetails[0];
  }
  if (spotName === "Sreemongal") {
    currentSpot = spotDetails[1];
  }
  if (spotName === "Sundarban") {
    currentSpot = spotDetails[2];
  }

  return (
    <Container fluid="md" style={{ marginTop: "100px" }}>
      <Row>
        <Col>
          <h1 className="spot">{currentSpot.name}</h1>
          <p className="spot_details">{currentSpot.details}</p>
        </Col>
        <Col>
          <Form
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Origin</Form.Label>
              <Form.Control type="email" defaultValue="Dhaka" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" defaultValue={currentSpot.name} />
            </Form.Group>

            <Row>
              <Col>
                <Form.Label>From</Form.Label>
                <Form.Control type="date" />
              </Col>
              <Col>
                <Form.Label>To</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>
            <br />
            <Button
              variant="warning"
              size="lg"
              block
              onClick={() => handleBook()}
            >
              Booking
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Datepicker;
