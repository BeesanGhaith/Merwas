import "./Automotive.css";
import React from "react";
import image41 from "../image/image41.jpg";
import image42 from "../image/image42.jpg";
import image43 from "../image/image43.jpg";
import image44 from "../image/image44.jpg";
import { Card, Button } from "react-bootstrap";

function Automotive() {
  const cardAuto= [
    {
      img: image41,
      title: "Seven-Piece Sponge & Scourer Car Pads",
      buy: "7 bought",
      discount: "$18",
      desc: "Seven-Piece Sponge & Scourer Car Pads Kit",
    },
    {
      img: image42,
      title: "Car Bluetooth Receiver & FM Tr...",
      buy: "10 bought",
      discount: "$28",
      desc: "Car MP3 Player 5.0 Bluetooth Receiver & FM Transmitter",
    },
    {
      img: image43,
      title: "Dashboard Camera with Motion De...",
      buy: "22 bought",
      discount: "$41",
      desc: "1080P HD Dashboard Camera with Motion Detection",
    },
    {
      img: image44,
      title: "Car Dash Camera with Rear Camera",
      buy: "17 bought",
      discount: "$68",
      desc: "Full HD 1080P Car Dash Camera with Reverse Rear Camera",
    },
  ];
  return (
    <>
      <span className="title-deals m-3">Automotive</span>
      <Button className="btn-view-deals">View More</Button>
      <div className="div-deals gap-3">
        {cardAuto.map((element) => (
          <Card className="card-deals card-act">
            <div className="div-img-desc">
              <Card.Img
                className="card-img"
                variant="top"
                src={element.img}
              />
              <Card.Text className="free">FREE DELIVERY</Card.Text>
              <Card.Text className="card-desc p-3">{element.desc}</Card.Text>
            </div>
            <Card.Body className="card-body-home p-3">
              <Card.Title className="card-title-deals">
                {element.title}
              </Card.Title>
              <Card.Text className="card-type-home">{element.type}</Card.Text>
              <Card.Text className="card-city-home">{element.city}</Card.Text>
              <Card.Text className="from mt-4">from</Card.Text>
              <div className="div-card-price price d-flex justify-content-between">
                <Card.Text>{element.buy}</Card.Text>
                <div className="card-price-dis d-flex gap-2">
                  <Card.Text className="card-price">{element.price}</Card.Text>
                  <Card.Text className="card-dis-deals fw-bold">
                    {element.discount}
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Automotive;
