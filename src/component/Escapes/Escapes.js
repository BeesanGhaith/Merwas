import React from "react";
import { Card, Button } from "react-bootstrap";
import { RiHeartAddLine } from "react-icons/ri";
import image13 from "../image/image13.jpg";
import image14 from "../image/image14.jpg";
import image15 from "../image/image15.jpg";
import image16 from "../image/image16.jpg";

function Escapes() {
  const cardEscapes = [
    {
      img: image13,
      title: "Three-Day Abel Tasman Self Guide...",
      type: "Wilsons Abel Tasman National Park",
      city: ".",
      buy: "329 bought",
      price: "$1.445",
      discount: "$1.145",
      desc: "Three-Day All-Inclusive Abel Tasman National Park Self Guided Walk incl. All Meals (Breakfast, Lunch & Dinners) Beachfront Lodge Accommodation, Vista Cruise & Transfers - September to December Date...",
    },
    {
      img: image14,
      title: "Larnach Castle Accommodation",
      type: "Larnach Castle - Dunedin",
      city: "Company Bay",
      buy: "8 bought",
      price: "$350",
      discount: "$181.50",
      desc: "One-Night Bed & Breakfast for Two People incl. Castle Entry, Complimentary AV Tour & Late Check-Out - Option for Two-Nights & to incl. Pre-Dinner Drink & Dinner for One Night",
    },
    {
      img: image15,
      title: "Picton Yacht Club Getaway for ...",
      type: "Picton Yacht Club",
      city: "Picton",
      buy: "6 bought",
      price: "$210",
      discount: "$99",
      desc: "One-Night Picton Yacht Club Getaway for Two People incl. Early Check-In & Check-Out, & 20% off Food & Beverages - Options for Two or Three Nights",
    },
    {
      img: image16,
      title: "Central Auckland Boutique Stay ...",
      type: "Fable Auckland M Gallery",
      city: "Auckland Central",
      buy: "90 bought",
      price: "$535",
      discount: "$299",
      desc: "Luxury Five-Star Auckland Boutique Stay for Two at Fable Auckland M Gallery incl. Cooked Breakfast, $50 F&B Credit, Parking, Spa & Fitness Centre & Late Checkout - Options to Stay in Classic or Lux...",
    },
  ];
  return (
    <>
      <div className="div-span-btn">
        <span className="title-deals m-3">Escapes</span>
        <Button className="btn-view-deals">View More</Button>
      </div>
      <div className="div-deals gap-3">
        {cardEscapes.map((element) => (
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

export default Escapes;
