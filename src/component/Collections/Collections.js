import "./Collections.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import image9 from "../image/image9.jfif";
import image10 from "../image/image10.jfif";
import image11 from "../image/image11.jfif";
import image12 from "../image/image12.jfif";

function Collections() {
  const cardCollections = [
    { img: image9, title: "Ugg collection", type: "Multiple deals" },
    { img: image10, title: "Vivo Hair & Beauty", type: "Multiple deals" },
    { img: image11, title: "South Island Getaways", type: "Multiple deals" },
    { img: image12, title: "Bedroom Essentials", type: "Multiple deals" },
  ];
  return (
    <>
      <span className="title-deals m-3">Collections</span>
      <Button className="btn-view-deals">View More</Button>

      <div className="div-deals gap-3">
        {cardCollections.map((element) => (
          <Card className="card-deals">
            <div className="div-img-desc">
              <Card.Img className="card-img" variant="top" src={element.img} />
              <Card.Text className="card-desc">{element.title}</Card.Text>
            </div>
            <Card.Body className="card-body-home text-center mt-1">
              <Card.Title className="card-title-deals">
                {element.title}
              </Card.Title>
              <Card.Text className="card-type-home">{element.type}</Card.Text>
            <Button className="btn-coll" variant="outline-primary">View Collection</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Collections;
