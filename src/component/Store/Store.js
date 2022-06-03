import "./Store.css";
import React from 'react';
import image21 from "../image/image21.jpg";
import image22 from "../image/image22.jpg";
import image23 from "../image/image23.jpg";
import image24 from "../image/image24.jpg";
import { Card, Button } from "react-bootstrap";


function Store() {
    const cardStore =[
        {
            img: image21,
            title: "Portable H2O Ultrasonic Air Humidifies",
            buy: null,
            discount: "$27",
            desc: "Portable H2O Ultrasonic Air Humidifier with Romantic Light - Three Colours Available",
          },{
            img: image22,
            title: "Hexagon Pattern Quilt Cover Set",
            buy: null,
            discount: "$70",
            desc: "Hexagon Pattern Quilt Cover Set - Six Colours & Two Sizes Available",
          },{
            img: image23,
            title: "IPL Machine for Face & Body Hair",
            buy: null,
            discount: "$89",
            desc: "IPL Machine for Face & Body Hair - Two Colours Available",
          },{
            img: image24,
            title: "Emily Drawer Range",
            buy: "1 bought",
            discount: "$150",
            desc: "Emily Drawer Range - Two Options Available",
          },
    ]
  return (
    <>
    <span className="title-deals m-3">Store</span>
      <Button className="btn-view-deals">View More</Button>
      <div className="div-deals gap-3">
        {cardStore.map((element) => (
          <Card className="card-deals card-act">
            <div className="div-img-desc">
              <Card.Img className="card-img img-act" variant="top" src={element.img} />
              <Card.Text className="card-desc p-3">{element.desc}</Card.Text>
            </div>
            <Card.Body className="card-body-home p-3">
              <Card.Title className="card-title-deals">{element.title}</Card.Title>
              <Card.Text className="card-type-home">{element.type}</Card.Text>
              <Card.Text className="card-city-home">{element.city}</Card.Text>
              <Card.Text className="from mt-4">from</Card.Text>
              <div className="div-card-price price d-flex justify-content-between">
                <Card.Text>{element.buy}</Card.Text>
                <div className="card-price-dis d-flex gap-2">
                  <Card.Text className="card-price">{element.price}</Card.Text>
                  <Card.Text className="card-dis-deals fw-bold">{element.discount}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Store