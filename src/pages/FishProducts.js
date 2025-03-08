// src/pages/FishProducts.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { database } from "../firebase";
import { get, set, ref } from "firebase/database";
import { AuthContext } from "../services/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import foodc from "../images/foodc.jpg";
import toysc from "../images/toysc.jpg";
import bioc from "../images/bioc.jpg";
import assec from "../images/assec.jpg";
import groomc from "../images/groomc.jpg";
import healthc from "../images/healthc.jpg";
import fishfood1 from "../images/fishfood1.webp";
import fishfood2 from "../images/fishfood2.webp";
import fishtoy1 from "../images/fishtoy1.jpg";
import fishaccessories1 from "../images/fishaccessories1.jpg";
import fishgroom1 from "../images/fishgroom1.webp";
import fishealth1 from "../images/fishhealth1.webp";

function FishProducts() {
  const { user } = useContext(AuthContext);

  // Maintain local cart state
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
    }
    

  // Slideshow images for fish products
  const fishSlideshowImages = [
    {
      src: "https://via.placeholder.com/1200x400?text=Fish+Food",
      alt: "Fish Food",
      caption: "Nutritious Fish Food for Your Aquarium",
    },
    {
      src: "https://via.placeholder.com/1200x400?text=Fish+Toys",
      alt: "Fish Toys",
      caption: "Fun Toys for Your Aquarium",
    },
    {
      src: "https://via.placeholder.com/1200x400?text=Fish+Accessories",
      alt: "Fish Accessories",
      caption: "Stylish Accessories for Your Aquarium",
    },
  ];

  // Sample data for fish products
  const productData = [
    {
      id: 401,
      category: "Fish",
      name: "Optimum Aquarium Fish Food 200 grams",
      price: 150,
      image: fishfood1,
      description: "Nutritious flake food suitable for a variety of freshwater fish.",
      subCategory: "Food",
    },
    {
      id: 402,
      category: "Fish",
      name: "Taiyo",
      price: 451,
      image: fishfood2,
      description: "High-quality pellet food designed for freshwater fish.",
      subCategory: "Food",
    },
    {
      id: 403,
      category: "Fish",
      name: "Aquarium Decoration",
      price: 14.99,
      image: fishtoy1,
      description: "Colorful decoration to enhance the look of your aquarium.",
      subCategory: "Toys",
    },
    {
      id: 404,
      category: "Fish",
      name: "Aquarium Pond Floating Thermometer",
      price: 129.99,
      image: fishaccessories1,
      description: "Spacious fish tank ideal for creating a beautiful aquatic environment.",
      subCategory: "Accessories",
    },
    {
      id: 405,
      category: "Fish",
      name: "Ocean Free Anti Chlorine Special Aquarium Water Conditioner 0.2 kg",
      price: 10.99,
      image: fishealth1,
      description: "A water conditioner that ensures a safe environment for your fish.",
      subCategory: "Health",
    },
    {
      id: 406,
      category: "Fish",
      name: "Tank Cleaning Kit",
      price: 19.99,
      image: fishgroom1,
      description: "Complete cleaning kit to keep your aquarium pristine and healthy.",
      subCategory: "Grooming",
    },
  ];

  // Sub-categories to display as separate sections
  const subCategories = ["Food", "Toys", "Accessories", "Health", "Grooming"];

  // Category boxes at the top for anchor navigation
  const categoryBoxes = [
    { name: "Food", anchor: "Food", image: foodc },
    { name: "Toys", anchor: "Toys", image: toysc },
    { name: "Accessories", anchor: "Accessories", image: assec },
    { name: "Health", anchor: "Health", image: healthc },
    { name: "Grooming", anchor: "Grooming", image: groomc },
    { name: "biodegradable", anchor: "biodegradable", image: bioc },
  ];

  return (
    <>
    <ToastContainer/>
    <Container className="mt-4">
      {/* Slideshow Carousel */}
      <Carousel className="mb-5">
        {fishSlideshowImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="mb-4">Fish Products</h2>

      {/* Top-level Category Boxes */}
      <Row className="mb-5">
        {categoryBoxes.map((cat) => (
          <Col md={2} sm={4} xs={6} className="mb-3" key={cat.name}>
            <a href={`#${cat.anchor}`} className="text-decoration-none text-dark">
              <Card className="text-center h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={cat.image}
                  alt={cat.name}
                  style={{ height: "100px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title className="h6">{cat.name}</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {/* Render each sub-category section */}
      {subCategories.map((subCat) => (
        <div key={subCat} className="mb-5" id={subCat}>
          <h3 className="mb-3">{subCat}</h3>
          <Row>
            {productData
              .filter((product) => product.subCategory === subCat)
              .map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                  <Card className="h-100">
                    {/* Link to product details */}
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
                    <Card.Footer className="text-end">
                      <Button
                        variant="primary"
                        onClick={() => addToCart(product)}
                        style={{ fontSize: "0.85rem" }}
                      >
                        Add to Cart
                      </Button>
                    </Card.Footer>
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

export default FishProducts;
