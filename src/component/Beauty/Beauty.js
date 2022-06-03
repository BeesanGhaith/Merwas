import "./Beauty.css";
import React from "react";
import image29 from "../image/image29.jpg";
import image30 from "../image/image30.jpg";
import image31 from "../image/image31.jpg";
import image32 from "../image/image32.jpg";
import { Card, Button } from "react-bootstrap";

function Beauty() {
  const cardBeauty = [
    {
      img: image29,
      title: "Hair Curling Band",
      buy: "16 bought",
      discount: "$15.50",
      desc: "Hair Curling Band - Five Colours Available & Option for Two-Pack",
    },
    {
      img: image30,
      title: "Portable Handhelp Octopus Ma...",
      buy: "5 bought",
      discount: "$20",
      desc: "Portable Handheld Octopus Massager - Two Colours Available",
    },
    {
      img: image31,
      title: "Rechargeable Nail Drill Machine",
      buy: "5 bought",
      discount: "$162",
      desc: "Portable White Rechargeable Nail Drill Machine for Acrylic Nails",
    },
    {
      img: image32,
      title: "Portable Electric Breast Pump",
      buy: null,
      discount: "$48",
      desc: "Portable Electric Breast Pump",
    },
  ];
  return (
    <>
      <span className="title-deals m-3">Beauty, Massage $ Spa</span>
      <Button className="btn-view-deals">View More</Button>
      <div className="div-deals gap-3">
        {cardBeauty.map((element) => (
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

export default Beauty;
