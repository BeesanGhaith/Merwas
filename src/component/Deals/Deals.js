import "./Deals.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";
import image5 from "../image/image5.jpg";
import image6 from "../image/image6.jpg";
import image7 from "../image/image7.jpg";
import image8 from "../image/image8.jpg";

function Deals() {
  const cardDeals = [
    {
      img: image1,
      title: "2kg Box of Fresh Central Otago C...",
      type: ".",
      city: ".",
      buy: "29 bought",
      price: "$66",
      discount: "$49",
      desc: "Early Bird - 2kg Box of Fresh Central Otago Premium Quality Mr Henry Cherries Delivered to Your Door in time for Christmas or New Year's Eve from 20th December 2022 to 19th January 2023",
    },
    {
      img: image2,
      title: "Balayage Hair Package",
      type: "Viva Hair and Skin Clinic",
      city: ".",
      buy: "17 bought",
      price: "$366",
      discount: "$189",
      desc: "Balayage Hair Package incl. Colour, Style Cut, Shampoo Service, Colour-Lock Treatment, Toner, Head Massage & Blow Wave Finish - Options for Enhanced and Deluxe Balayage with Root Melts",
    },
    {
      img: image3,
      title: "HelloFresh Special Offer",
      type: "HelloFresh",
      city: ".",
      buy: "147 bought",
      price: "$93.93",
      discount: "$38.93",
      desc: "HelloFresh Special Offer - Up to $69.95 OFF Your First Box, $115 OFF Your First Two Boxes, or $150 OFF Your First Four Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available",
    },
    {
      img: image4,
      title: "Four-Day Luxury Queensland Get",
      type: "Inspired Escapes",
      city: ".",
      buy: ".",
      price: null,
      discount: "$849",
      desc: "Per-Person, Twin-Share Four-Day Luxury Queensland Getaway incl. Accommodation, Dolphin View Kayak, 4x4 Great Beach Adventure Drive, National Park Entry Fees, Eco Safari Day Tour & More",
    },
    {
      img: image5,
      title: "Escape Game & Race Car Session",
      type: "ThrillZone",
      city: ".",
      buy: "13 bought",
      price: "$83",
      discount: "$45",
      desc: "One Person Outdoor Escape Adventure OR Virtual Reality Escape Room & a Race Car Simulator Session",
    },
    {
      img: image6,
      title: "Armstrong's Introductory Deale...",
      type: "Armstrong's East Auckland",
      city: "Burswood",
      buy: ".",
      price: "$310",
      discount: "$209",
      desc: "Armstrong's Introductory Dealership Service for Nissan, Hyundai, Holden Vehicles incl. 20 Point Check, Oil & Filter Change, Complementary Wash, Vacuum & Barista Coffee - Options Available for 5 Yea...",
    },
    {
      img: image7,
      title: "Body Fit 3D Scan incl. Scan Anal",
      type: "Extreme3D Body Scanning",
      city: ".",
      buy: "16 bought",
      price: "$79",
      discount: "$9.95",
      desc: "Body Fit 3D Scan incl. Scan Analysis",
    },
    {
      img: image8,
      title: "European High Tea for Two Peo...",
      type: "Monsieur Madame",
      city: "Mount Eden",
      buy: "4 bought",
      price: null,
      discount: "$45",
      desc: "European High Tea for Two People incl. Tea or Coffee - Option to incl. Bubbles",
    },
  ];
  return (
    <>
      <span className="title-deals">Featured Auckland deals</span>
      <Button className="btn-view-deals">View More</Button>
      <div className="div-deals">
        {cardDeals.map((element) => (
          <Card className="card-deals">
            <div className="div-img-desc">
              <Card.Img className="card-img" variant="top" src={element.img} />
              <Card.Text className="card-desc">{element.desc}</Card.Text>
            </div>
            <Card.Body className="card-body-home">
              <Card.Title className="card-title-deals">{element.title}</Card.Title>
              <Card.Text className="card-type-home">{element.type}</Card.Text>
              <Card.Text className="card-city-home">{element.city}</Card.Text>
              <Card.Text className="from">from</Card.Text>
              <div className="div-card-price">
                <Card.Text>{element.buy}</Card.Text>
                <div className="card-price-dis">
                  <Card.Text className="card-price">{element.price}</Card.Text>
                  <Card.Text className="card-dis-deals">{element.discount}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Deals;
