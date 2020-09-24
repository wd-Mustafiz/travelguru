import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Hotel from "../Hotel/Hotel";

const coxBazar = [
  {
    id: 1,
    areaMap:
      "https://oldweb.lged.gov.bd/UploadedDocument/Map/CHITTAGONG/cox's%20bazar/cox's%20bazar.jpg",
    area: "Cox Bazar",
    img: "https://i.imgur.com/sUMKJ9G_d.webp?maxwidth=728&fidelity=grand",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$52/day",
  },
  {
    id: 2,
    area: "Cox Bazar",
    img: "https://i.imgur.com/XNKWdRG_d.webp?maxwidth=728&fidelity=grand",
    title:
      " Alias odit aut veniam placeat aperiam officia quia aliquid vero sunt.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$62/day",
  },
  {
    id: 3,
    area: "Cox Bazar",
    img: "https://i.imgur.com/lUzOdbf_d.webp?maxwidth=728&fidelity=grand",
    title: "Lorem ipsum dolor sit amet consectetur.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$72/day",
  },
];

const Sreemongal = [
  {
    id: 1,
    areaMap:
      "https://3.bp.blogspot.com/-OS-pfh5FAlw/WbOC0SRJB1I/AAAAAAAAFCs/FhUOQtTFU_YcZ9z45IUlWwWG5kWByms1gCKgBGAs/s1600/land-use-map-sreemangal-moulvibazar-bangladesh.jpg",
    area: "Sreemongal",
    img:
      "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$52/day",
  },
  {
    id: 2,
    area: "Sreemongal",
    img:
      "https://www.kiss1023.ca/wp-content/uploads/sites/10/2016/11/hotel.jpg",
    title:
      " Alias odit aut veniam placeat aperiam officia quia aliquid vero sunt.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$62/day",
  },
  {
    id: 3,
    area: "Sreemongal",
    img:
      "https://www.leonardo-hotels.com/octopus/upload/images/pages/rcdbllhhecc01mai18800x600.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$72/day",
  },
];

const Sundarban = [
  {
    id: 1,
    areaMap:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/West_Bengal_relief.svg/284px-West_Bengal_relief.svg.png",
    area: "Sundarban",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/132/132905587.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$52/day",
  },
  {
    id: 2,
    area: "Sundarban",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzeyYdmDcy7zox9v-I7D4s74PYMDJOgQIBaQ&usqp=CAU",
    title:
      " Alias odit aut veniam placeat aperiam officia quia aliquid vero sunt.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$62/day",
  },
  {
    id: 3,
    area: "Sundarban",
    img: "https://www.asiahotel.com.bd/image/single-home.jpg",
    title: "Lorem ipsum dolor sit amet consectetur.",
    discript:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus laudantium laborum molestiae.",
    price: "$72/day",
  },
];
const Booking = () => {
  let { spotName } = useParams();

  let currentSpot;

  if (spotName === "Cox Bazar") {
    currentSpot = coxBazar;
  }
  if (spotName === "Sreemongal") {
    currentSpot = Sreemongal;
  }
  if (spotName === "Sundarban") {
    currentSpot = Sundarban;
  }
  return (
    <Container
      fluid="md"
      style={{
        marginTop: "10px",
        background: "white",
        padding: "20px 10px",
        borderRadius: "12px 0 12px 0",
      }}
    >
      <Row>
        <Col xs={12} md={7}>
          {currentSpot.map((hotel) => (
            <Hotel hotel={hotel} key={hotel.id}></Hotel>
          ))}
        </Col>
        <Col xs={6} md={5} className="mt-5">
          <img
            src={currentSpot[0].areaMap}
            height="500px"
            width="100%"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
