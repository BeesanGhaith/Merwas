import "./Restaurants.css";
import React from "react";
import image25 from "../image/image25.jpg";
import image26 from "../image/image26.jpg";
import image27 from "../image/image27.jpg";
import image28 from "../image/image28.jpg";
import { Card, Button } from "react-bootstrap";
import { RiHeartAddLine } from "react-icons/ri";

function Restaurants() {
  const cardRest = [
    {
      img: image25,
      title: "Remuera Dining Experience for ...",
      type: "Remuera Local & Laneway",
      city: "Remuera",
      buy: "72 bought",
      price: "$40",
      discount: "$20",
      desc: "$40 Breakfast or Lunch Voucher for Two People - Option for $60 Dinner Voucher",
    },
    {
      img: image26,
      title: "Five-Course European Dining E...",
      type: "Monsieur Madame",
      city: "Mount Eden",
      buy: "1 bought",
      price: null,
      discount: "$69",
      desc: "Five-Course European Dining Experience for One Person - Options for up to Eight People",
    },
    {
      img: image27,
      title: "Breakfast in Mount Eden",
      type: "Eden Bistro",
      city: "Mount Eden",
      buy: "3 bought",
      price: "$39",
      discount: "$29",
      desc: "Gourmet Breakfast for Two in Mount Eden - Options for up to Six People",
    },
    {
      img: image28,
      title: "Two-Course Dining in Mt Eden",
      type: "Eden Bistro",
      city: "Mount Eden",
      buy: null,
      price: "$86",
      discount: "$69",
      desc: "Two-Course Dining for Two People - Options for up to Eight People",
    },
  ];
  return (
    <>
      <div className="div-span-btn">
        <span className="title-deals m-3">Restaurants, Bars, Cafes</span>
        <Button className="btn-view-deals">View More</Button>
      </div>
      <div className="div-deals gap-3">
        {cardRest.map((element) => (
          <Card className="card-deals">
            <div className="div-img-desc">
              <RiHeartAddLine className="fav-icon fs-3" />
              <Card.Img className="card-img" variant="top" src={element.img} />
              <Card.Text className="card-desc p-3">{element.desc}</Card.Text>
            </div>
            <Card.Body className="card-body-home p-3">
              <Card.Title className="card-title-deals">
                {element.title}
              </Card.Title>
              <Card.Text className="card-type-home">{element.type}</Card.Text>
              <Card.Text className="card-city-home">{element.city}</Card.Text>
              <Card.Text className="from mt-2">from</Card.Text>
              <div className="div-card-price d-flex justify-content-between">
                <Card.Text>{element.buy}</Card.Text>
                <div className="card-price-dis d-flex gap-2">
                  <Card.Text className="card-price">{element.price}</Card.Text>
                  <Card.Text className="card-dis fw-bold">
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

export default Restaurants;
