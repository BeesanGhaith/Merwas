import "./Sport.css";
import React from "react";
import image37 from "../image/image37.jpg";
import image38 from "../image/image38.jpg";
import image39 from "../image/image39.jpg";
import image40 from "../image/image40.jpg";
import { Card, Button } from "react-bootstrap";

function Sport() {
  const cardSport = [
    {
      img: image37,
      title: "Yoga Mat Storage Bag",
      type: ".",
      buy: "10 bought",
      discount: "$19.50",
      desc: "Yoga Mat Storage Bag - Option for Two-Pack",
    },
    {
      img: image38,
      title: "Recumbent Bike",
      type: "TSB Living",
      buy: "1 bought",
      discount: "$373",
      desc: "Recumbent Bike with LCD Display",
    },
    {
      img: image39,
      title: "Solo Tennis Trainer",
      type: ".",
      buy: "9 bought",
      discount: "$30",
      desc: "Solo Tennis Trainer with Balls Rebound - Available in Two Colours",
    },
    {
      img: image40,
      title: "Sports Waist Trainer",
      type: ".",
      buy: "21 bought",
      discount: "$22",
      desc: "Sports Waist Trainer - Four Colours & Six Sizes Available",
    },
  ];
  return (
    <>
      <span className="title-deals m-3">Fitness & Sports</span>
      <Button className="btn-view-deals">View More</Button>
      <div className="div-deals gap-3">
        {cardSport.map((element) => (
          <Card className="card-deals">
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

export default Sport;
