import "./Navigation.css";
import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";

function Navigation() {
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand className="title">GrabOne</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-2">
          <HiOutlineLocationMarker className="location-icon" />
          <Navbar.Text className="nav-text">Anckland</Navbar.Text>
          <IoIosArrowDown className="arrow-icon" />
          <FiHeart className="nav-icon" />
          <FiShoppingCart className="nav-icon" />
          <RiUser3Line className="nav-icon" />
          <IoIosArrowDown className="arrow-icon-" />
          <HiOutlineMail className="email-icon" />
          <Navbar.Text className="nav-text-sub">Subscribe</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="navbar2" expand="lg">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="nav-text">Browse Categories</Nav.Link>
            <IoIosArrowDown className="arrow-icon2" />
            <Nav.Link className="nav-text nav-text-w">What's New</Nav.Link>
            <Nav.Link className="nav-text">Trending</Nav.Link>
            <Nav.Link className="nav-text">For You</Nav.Link>
            <Nav.Link className="nav-text">Shop Products</Nav.Link>
          </Nav>
          <Form className="form d-flex">
            <FormControl
              type="search"
              placeholder="Search GrabOne"
              className="form-search"
              aria-label="Search"
            />
            <FiSearch className="search-icon" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
