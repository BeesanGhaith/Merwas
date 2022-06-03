import "./Activities.css";
import React from "react";
import image17 from "../image/image17.jpg";
import image18 from "../image/image18.jpg";
import image19 from "../image/image19.jpg";
import image20 from "../image/image20.jpg";
import { Card, Button } from "react-bootstrap";

function Activities() {
  const cardActivitiy = [
    {
      img: image17,
      title: "Pen Fishing Rod Reel",
      buy: "8 bought",
      discount: "$54",
      desc: "Pen Fishing Rod Reel J1460-6",
    },
    {
      img: image18,
      title: "Outdoor Pop-Up Tent",
      buy: null,
      discount: "$81",
      desc: "Outdoor Pop-Up Tent - Two Colours Available",
    },
    {
      img: image19,
      title: "Keychain Flashlight Tool",
      buy: "7 bought",
      discount: "$29",
      desc: "Keychain Flashlight Tool - Option for Two",
    },
    {
      img: image20,
      title: "COB Head Mounted Outdoor Li...",
      buy: "15 bought",
      discount: "$21",
      desc: "COB Head Mounted Outdoor Light Head Torch",
    },
  ];
  return (
    <>
      <span className="title-deals m-3">Activities, Events & Outdoors</span>
      <Button className="btn-view-deals">View More</Button>
      <div className="div-deals gap-3">
        {cardActivitiy.map((element) => (
          <Card className="card-deals card-act">
            <div className="div-img-desc">
              <Card.Img
                className="card-img img-act"
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
              <Card.Text className="from mt-2">from</Card.Text>
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

export default Activities;
