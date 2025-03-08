// src/pages/BirdProducts.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { AuthContext } from "../services/AuthContext";
import { database } from "../firebase";
import { get, set, ref } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import foodc from "../images/foodc.jpg";
import toysc from "../images/toysc.jpg";
import bioc from "../images/bioc.jpg";
import assec from "../images/assec.jpg";
import groomc from "../images/groomc.jpg";
import healthc from "../images/healthc.jpg";
import birdaccessories1 from "../images/birdaccessories1.jpg";
import birdaccessories2 from "../images/birdaccessories2.jpg";
import birdfood1 from "../images/birdfood1.jpg";
import birdfood2 from "../images/birdfood2.jpg";
import birdfood3 from "../images/birdfood3.jpg";
import birdhealth1 from "../images/birdhealth1.jpg";
import birdhealth2 from "../images/birdhealth2.jpg";
import birdtoy1 from "../images/birdtoy1.jpg";
import birdtoy2 from "../images/birdtoy2.jpg";
import birdtoy3 from "../images/birdtoy3.jpg";
import birdslidefood from "../images/birdslidefood.webp";
import birdslidehealth from "../images/birdslidehealth.webp";
import birdslidetoy from "../images/birdslidetoy.webp";

// Slideshow images for birds (if needed)
const birdSlideshowImages = [
  {
    src: birdslidefood,
    alt: "Premium Bird Seed",
    caption: "Premium Bird Seed for Happy Birds",
  },
  {
    src: birdslidetoy,
    alt: "Colorful Bird Toys",
    caption: "Entertain Your Feathered Friends",
  },
  {
    src: birdslidehealth,
    alt: "Bird health",
    caption: "Everything Your Bird Needs",
  },
];

function BirdProducts() {
  const { user, isLoading, logOut, signInWithGoogle } = useContext(AuthContext);

  // Local cart state
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Add to cart function
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    console.log(updatedCart);

  if(user && user?.uid)
  {
    set(ref(database, `/${user.uid}`), { updatedCart });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);

  }
  else{
    toast.error("Sigin Required", {
      position: "top-right",
      autoClose: 3000,
     });
  }
    
  };

  // Category Boxes at the top
  const categoryBoxes = [
    { name: "Food", anchor: "Food", image: foodc },
    { name: "Toys", anchor: "Toys", image: toysc },
    { name: "Grooming", anchor: "Grooming", image: groomc },
    { name: "Accessories", anchor: "Accessories", image: assec },
    { name: "Health", anchor: "Health", image: healthc },
    { name: "biodegradable", anchor: "biodegradable", image: bioc },
  ];

  // Sample product data for birds with subCategory for anchor sections
  const productData = [
    {
      id: 301,
      category: "Birds",
      subCategory: "Food",
      name: "Bird Seed Mix",
      price: 12.99,
      image: birdfood1,
      description: "A nutritious blend of seeds perfect for small birds.",
    },
    {
      id: 302,
      category: "Birds",
      subCategory: "Food",
      name: "Pellet Food",
      price: 15.99,
      image: birdfood2,
      description: "High-quality pellet food suitable for various bird species.",
    },
    {
      id: 303,
      category: "Birds",
      subCategory: "Food",
      name: "Pellet Food",
      price: 15.99,
      image: birdfood3,
      description: "High-quality pellet food suitable for various bird species.",
    },
    {
      id: 305,
      category: "Birds",
      subCategory: "Toys",
      name: "Bird Swing",
      price: 9.99,
      image: birdtoy1,
      description: "A fun swing to provide exercise and entertainment for your bird.",
    },
    {
      id: 306,
      category: "Birds",
      subCategory: "Toys",
      name: "Bird Swing",
      price: 9.99,
      image: birdtoy2,
      description: "A fun swing to provide exercise and entertainment for your bird.",
    },
    {
      id: 307,
      category: "Birds",
      subCategory: "Toys",
      name: "Bird Swing",
      price: 9.99,
      image: birdtoy3,
      description: "A fun swing to provide exercise and entertainment for your bird.",
    },
    {
      id: 309,
      category: "Birds",
      subCategory: "Grooming",
      name: "Bird Bath",
      price: 19.99,
      image: "https://via.placeholder.com/300x200?text=Bird+Bath",
      description: "A small bath for birds to splash around and stay clean.",
    },
    {
      id: 313,
      category: "Birds",
      subCategory: "Accessories",
      name: "Bird Cage",
      price: 89.99,
      image: birdaccessories1,
      description: "Spacious bird cage with plenty of room for exercise and play.",
    },
    {
      id: 314,
      category: "Birds",
      subCategory: "Accessories",
      name: "Bird Cage",
      price: 89.99,
      image: birdaccessories2,
      description: "Spacious bird cage with plenty of room for exercise and play.",
    },
    {
      id: 317,
      category: "Birds",
      subCategory: "Health",
      name: "Bird Vitamins",
      price: 8.99,
      image: birdhealth1,
      description: "Essential vitamins to keep your bird active and healthy.",
    },
    {
      id: 318,
      category: "Birds",
      subCategory: "Health",
      name: "Bird Vitamins",
      price: 8.99,
      image: birdhealth2,
      description: "Essential vitamins to keep your bird active and healthy.",
    },
  ];

  // The sub-categories we want to display as separate sections
  const subCategories = ["Food", "Toys", "Grooming", "Accessories", "Health", "biodegradable"];

  return (
    <>
    <ToastContainer/>
    <Container className="mt-4"></Container>
      <Container className="mt-4">
      {/* Slideshow Carousel */}
      <br></br>
      <br></br>
      <br></br>

      <Carousel className="mb-5">
        {birdSlideshowImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={slide.src} alt={slide.alt} style={{ height: "400px", objectFit: "cover" }} />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="mb-4">Bird Products</h2>
      

      {/* Category Boxes */}
      <Row className="mb-5">
        {categoryBoxes.map((cat) => (
          <Col md={2} sm={4} xs={6} className="mb-3" key={cat.name}>
            <a href={`#${cat.anchor}`} className="text-decoration-none text-dark">
              <Card className="text-center h-100 shadow-sm">
                <Card.Img variant="top" src={cat.image} alt={cat.name} style={{ height: "100px", objectFit: "contain" }} />
                <Card.Body>
                  <Card.Title className="h6">{cat.name}</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {/* Sub-category Product Listings */}
      {subCategories.map((subCat) => (
        <div key={subCat} className="mb-5" id={subCat}>
          <h3 className="mb-3">{subCat}</h3>
          <Row>
            {productData
              .filter((product) => product.subCategory === subCat)
              .map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                  <Card className="h-100 text-center shadow-sm">
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: "150px", objectFit: "contain" }}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontSize: "1rem" }}>{product.name}</Card.Title>
                        <Card.Text style={{ fontSize: "0.85rem" }}>{product.description}</Card.Text>
                        <Card.Text>
                          <strong>₹{product.price.toFixed(2)}</strong>
                        </Card.Text>
                      </Card.Body>
                    </Link>
                    <Button variant="primary" onClick={() => addToCart(product)} style={{ fontSize: "0.85rem" }} className="m-2">
                      Add to Cart
                    </Button>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </Container>
    </>

  );
}

export default BirdProducts;
