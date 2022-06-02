import "./Home.css";
import React from "react";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import image from "../image/home.png";
import elephent from "../image/elephent.jpg";
import cordis from "../image/cordis.jpg";
import { HiOutlineMail } from "react-icons/hi";
import Deals from "../Deals/Deals"

function Home() {
  const List = [
    { title: "Feature Auckland deals", number: 259 },
    { title: "Collections", number: 37 },
    { title: "Escapes", number: 80 },
    { title: "Picked for You", number: null },
    { title: "Activities, Events & Outdoors", number: 271 },
    { title: "Store", number: 5352 },
    { title: "Restaurants, Bars, Cafes", number: 20 },
    { title: "Beauty, Massage & Spa", number: 414 },
    { title: "House & Garden", number: 2601 },
    { title: "Fitness & Sports", number: 307 },
    { title: "Automotive", number: 167 },
  ];

  const cardHome = [
    {
      img: elephent,
      title: "Double Pass Entry to Sculptureum",
      type: "Sculptureum",
      city: "Matakana",
      buy: "400 bought",
      price: "$90",
      discount: "$35",
      desc: "Double Pass Entry to Sculptureum - 72 - Hour Flash Sale - While Stocks Last",
    },
    {
      img: cordis,
      title: "Luxury 5-Star Auckland Stay at Cordis",
      type: "Cordis",
      city: "Auckland",
      buy: "637 bought",
      price: "$580",
      discount: "$279",
      desc: "Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa & Fitness Centre, Parking & Late Checkout - Options to Stay in the...",
    },
  ];
  return (
    <>
      <Card>
        <Card.Img className="img-home" src={image} />
      </Card>
      <div className="homepage-top d-flex gap-3">
        <ListGroup as="ol" className="list-group list-group-flush">
          <h3 className="pt-3 mb-0">Discover</h3>
          {List.map((element) => (
            <>
              <ListGroup.Item
                as="li"
                className="list d-flex justify-content-between"
              >
                <div className="li-title pb-1 pt-1">{element.title}</div>
                <div className="number mt-2">{element.number}</div>
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>

        {cardHome.map((element) => (
          <Card className="card">
            <div className="div-img-desc">
              <Card.Img className="card-img" variant="top" src={element.img} />
              <Card.Text className="card-desc p-5">{element.desc}</Card.Text>
            </div>
            <Card.Body className="card-body-home p-3">
              <Card.Title className="card-title">{element.title}</Card.Title>
              <Card.Text className="card-type-home">{element.type}</Card.Text>
              <Card.Text className="card-city-home">{element.city}</Card.Text>
              <Card.Text className="from mt-2">from</Card.Text>
              <div className="div-card-price d-flex justify-content-between">
                <Card.Text>{element.buy}</Card.Text>
                <div className="card-price-dis d-flex gap-2">
                  <Card.Text className="card-price">{element.price}</Card.Text>
                  <Card.Text className="card-dis fw-bold">{element.discount}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Form>
        <Form.Group className="form-email">
          <Form.Label className="email-label">
            Get the best deals delivered direct to your inbox each day
          </Form.Label>
          <div className="div-email-input">
            <Form.Control
              className="email-input"
              type="email"
              placeholder="Enter email address"
            ></Form.Control>
            <HiOutlineMail className="mail-icon" />
          <Button className="btn-subscribe">Subscribe</Button>
          </div>
        </Form.Group>
      </Form>

      <Deals/>
    </>
  );
}

export default Home;
