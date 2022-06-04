import "./House.css";
import React from "react";
import image33 from "../image/image33.jpg";
import image34 from "../image/image34.jpg";
import image35 from "../image/image35.jpg";
import image36 from "../image/image36.jpg";
import { Card, Button } from "react-bootstrap";
import { RiHeartAddLine } from "react-icons/ri";

function House() {
  const cardHouse = [
    {
      img: image33,
      title: "10pc Plant & Tree Trunk Protectors",
      buy: "7 bought",
      discount: "$61",
      desc: "10-Piece Mesh Plant & Tree Trunk Protectors",
    },
    {
      img: image34,
      title: "Three-Piece Reusable Ziplck St...",
      buy: "7 bought",
      discount: "$22",
      desc: "Three-Piece Reusable Ziplock Storage Bags - Available in Three Sizes",
    },
    {
      img: image35,
      title: "Elastic Office Chair Cover",
      buy: "16 bought",
      discount: "$22",
      desc: "Elastic Office Chair Cover - Six Colours Available",
    },
    {
      img: image36,
      title: "Urban Industrial Pipe Clothing R...",
      buy: "18 bought",
      discount: "$129",
      desc: "Urban Industrial Pipe Clothing Rack - Three Colours Available",
    },
  ];
  return (
    <>
      <div className="div-span-btn">
        <span className="title-deals m-3">House & Garden</span>
        <Button className="btn-view-deals">View More</Button>
      </div>
      <div className="div-deals gap-3">
        {cardHouse.map((element) => (
          <Card className="card-deals">
            <div className="div-img-desc">
              <RiHeartAddLine className="fav-icon fs-3" />
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

export default House;
