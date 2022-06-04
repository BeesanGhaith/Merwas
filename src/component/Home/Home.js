import "./Home.css";
import React from "react";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import image from "../image/home.png";
import elephent from "../image/elephent.jpg";
import cordis from "../image/cordis.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { RiHeartAddLine, RiUser3Line } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FaCameraRetro } from "react-icons/fa";
import Deals from "../Deals/Deals";
import Collections from "../Collections/Collections";
import Escapes from "../Escapes/Escapes";
import Activities from "../Activities/Activities";
import Store from "../Store/Store";
import Restaurants from "../Restaurants/Restaurants";
import Beauty from "../Beauty/Beauty";
import House from "../House/House";
import Sport from "../Sport/Sport";
import Automotive from "../Automotive/Automotive";
import { Navbar } from "react-bootstrap";
import { FiHome, FiSearch, FiShoppingCart } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

function Home() {
  const List = [
    { title: "Feature Auckland deals", number: 259 },
    { title: "Collections", number: 37 },
    { title: "Escapes", number: 80 },
    { title: "Picked for You", number: null },
    { title: "Activities, Events & Outdoors", number: 271 },
    { title: "Store", number: 5352 },
    { title: "Restaurants, Bars, Cafes", number: 20 },
    { title: "Beauty, Massage & Spa", number: 414 },
    { title: "House & Garden", number: 2601 },
    { title: "Fitness & Sports", number: 307 },
    { title: "Automotive", number: 167 },
  ];

  const cardHome = [
    {
      img: elephent,
      title: "Double Pass Entry to Sculptureum",
      type: "Sculptureum",
      city: "Matakana",
      buy: "400 bought",
      price: "$90",
      discount: "$35",
      desc: "Double Pass Entry to Sculptureum - 72 - Hour Flash Sale - While Stocks Last",
    },
    {
      img: cordis,
      title: "Luxury 5-Star Auckland Stay at Cordis",
      type: "Cordis",
      city: "Auckland",
      buy: "637 bought",
      price: "$580",
      discount: "$279",
      desc: "Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa & Fitness Centre, Parking & Late Checkout - Options to Stay in the...",
    },
  ];
  return (
    <>
      <Card>
        <Card.Img className="img-home" src={image} />
      </Card>
      <div className="homepage-top d-flex gap-3">
        <ListGroup as="ol" className="list-group list-group-flush">
          <h3 className="pt-3 mb-0">Discover</h3>
          {List.map((element) => (
            <>
              <ListGroup.Item
                as="li"
                className="list d-flex justify-content-between"
              >
                <div className="li-title pb-1 pt-1">{element.title}</div>
                <div className="number mt-2">{element.number}</div>
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>

        {cardHome.map((element) => (
          <Card className="card">
            <div className="div-img-desc">
              <RiHeartAddLine className="fav-icon fs-3" />
              <Card.Img className="card-img" variant="top" src={element.img} />
              <Card.Text className="card-desc p-3">{element.desc}</Card.Text>
            </div>
            <Card.Body className="card-body-home p-3">
              <Card.Title className="card-title">{element.title}</Card.Title>
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

      <Form>
        <Form.Group className="form-email">
          <Form.Label className="email-label">
            Get the best deals delivered direct to your inbox each day
          </Form.Label>
          <div className="div-email-input">
            <Form.Control
              className="email-input"
              type="email"
              placeholder="Enter email address"
            ></Form.Control>
            <HiOutlineMail className="mail-icon" />
            <Button className="btn-subscribe">Subscribe</Button>
          </div>
        </Form.Group>
      </Form>

      <Deals />
      <Collections />
      <Escapes />
      <Activities />
      <Store />
      <Restaurants />
      <Beauty />
      <House />
      <Sport />
      <Automotive />

      <div className="div-footer p-3 d-flex">
        <div className="footer d-flex flex-wrap">
          <div>
            <h6>Follow us on</h6>
            <div className="footer-icons d-flex gap-2">
              <BsFacebook className="facebook-icon" />
              <AiFillTwitterCircle className="twitter-icon" />
              <FaCameraRetro className="camera-icon" />
              <SiYoutubemusic className="youtube-icon" />
            </div>
            <p className="fw-bold">Get app exclusive deals</p>
            <div>
              <Button className="btn-download">Download our App</Button>
            </div>
          </div>
          <div>
            <h6>GrabOne</h6>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Terms & Returns</p>
            <p>Blog</p>
            <p>Gift Cards</p>
          </div>
          <div>
            <h6>My Account</h6>
            <p>My Account</p>
            <p>My Cart</p>
            <p>My Coupons</p>
            <p>FAQ</p>
          </div>
          <div>
            <h6>Merchants</h6>
            <p>Run a Deal</p>
            <p>Merchant Centre</p>
          </div>
        </div>
        <div>
          <Form className="footer-form">
            <Form.Group className="">
              <Form.Label className="fw-bold">Newsletter Signup</Form.Label>
              <br />
              <Form.Text className="fw-bold">
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </Form.Text>
              <div className="d-flex mt-3">
                <Form.Control
                  className="footer-input"
                  type="email"
                  placeholder="Enter email address"
                ></Form.Control>
                <HiOutlineMail className="mail-icon" />
                <Button className="btn-subscribe">Subscribe</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="privacy-policy pt-3 p-5">
        <span className="pri-pol">Privacy Policy</span>
        <span>© 2022 GrabOne Limited</span>
      </div>

      <div className="div-nav-bottom">
        <Navbar
          className="navbar-bottom d-flex justify-content-around"
          fixed="bottom"
        >
          <div>
            <FiHome className="fs-5" />
            <Navbar.Text>Home</Navbar.Text>
          </div>
          <div>
            <FiSearch className="fs-5" />
            <Navbar.Text>Search</Navbar.Text>
          </div>
          <div>
            <BiCategory className="fs-5" />
            <Navbar.Text>Categories</Navbar.Text>
          </div>
          <div>
            <FiShoppingCart className="fs-5" />
            <Navbar.Text>Cart</Navbar.Text>
          </div>
          <div>
            <RiUser3Line className="fs-5" />
            <Navbar.Text>Account</Navbar.Text>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default Home;
