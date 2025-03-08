// src/pages/DogProducts.js
import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { database } from "../firebase";

import { get , set  , ref } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Example local images for categories (replace with your actual images if desired)
import foodc from "../images/foodc.jpg";
import toysc from "../images/toysc.jpg";
import groomc from "../images/groomc.jpg";
import healthc from "../images/healthc.jpg";
import assec from "../images/assec.jpg";
import bioc from "../images/bioc.jpg";

import dogaccessories1 from "../images/dogaccessories1.jpg";
import dogaccessories2 from "../images/dogaccessories2.jpg";
import dogaccessories3 from "../images/dogaccessories3.jpg";

import dogbio1 from "../images/dogbio1.jpg";
import dogbio2 from "../images/dogbio2.jpg";
import dogbio3 from "../images/dogbio3.jpg";

import dogfood1 from "../images/dogfood1.jpg";
import dogfood2 from "../images/dogfood2.jpg";
import dogfood3 from "../images/dogfood3.png";
import dogfood4 from "../images/dogfood4.jpg";

import doggroom1 from "../images/doggroom1.jpg";
import doggroom2 from "../images/doggroom2.jpg";
import doggroom3 from "../images/doggroom3.jpg";

import doghealth1 from "../images/doghealth1.jpg";
import doghealth2 from "../images/doghealth2.jpg";
import doghealth3 from "../images/doghealth3.jpg";
import doghealth4 from "../images/doghealth4.jpg";

import dogtoy1 from "../images/dogtoy1.jpg";
import dogtoy2 from "../images/dogtoy2.jpg";
import dogtoy3 from "../images/dogtoy3.jpg";
import dogslidefood from "../images/dogslidefood.webp";
import dogslidetoy from "../images/dogslidetoy.webp";
import dogslideass from "../images/dogslideass.webp";

import { AuthContext } from "../services/AuthContext";

function DogProducts() {

  
    const {user ,  isLoading, logOut, signInWithGoogle } = useContext(AuthContext);
  


  // Maintain local cart state, syncing with localStorage
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Add to cart function
  const addToCart = (product) => {
    const updatedCart = [...cart, product];

    console.log(updatedCart);
    if(user && user?.uid){

      set(ref(database, `/${user.uid}`), {
        updatedCart
      });
  
  
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
  // Slideshow images
  const slideshowImages = [
    {
      src: dogslidefood,
      alt: "Premium Dog Food",
      caption: "Premium Dog Food for Healthy Pets",
    },
    {
      src: dogslidetoy,
      alt: "Quality Dog Toys",
      caption: "Fun & Durable Dog Toys",
    },
    {
      src: dogslideass,
      alt: "Best Dog Accessories",
      caption: "Stylish Accessories for Your Dog",
    },
  ];

  // Main dog products
  const productData = [
    {
      id: 1,
      category: "Food",
      name: "Drools",
      price: 225.99,
      image: dogfood1,
      description:
        ": Build lean muscle and promote overall health with Drools Chicken and Egg Adult Formula High in protein vitamins and minerals",
    },
    {
      id: 2,
      category: "Food",
      name: "pedigree",
      price: 118.99,
      image: dogfood2,
      description:
        "Pedigree is a complete and balanced food for dogs. Prepared with high-quality ingredients, Pedigree is rich in proteins and nutrition.",
    },
    {
      id: 3,
      category: "Food",
      name: "henlo",
      price: 118.99,
      image: dogfood3,
      description:
        "It's a complete and balanced everyday meal, carefully crafted with simple and essential ingredients that contribute to your dog's holistic nutrition",
    },
    {
      id: 4,
      category: "Food",
      name: "supercoat",
      price: 118.99,
      image: dogfood4,
      description:
        "SUPERCOAT is specifically formulated to be nutritionally complete and balanced to meet the nutritional requirements of adult dogs",
    },
    {
      id: 5,
      category: "Toys",
      name: "Chew Toy",
      price: 132.99,
      image: dogtoy1,
      description: "Durable chew toy designed to promote dental health.",
    },
    {
      id: 6,
      category: "Toys",
      name: "Basil Tyre Rope Toy",
      price: 132.99,
      image: dogtoy2,
      description: "Ideal for active dogs who love tugging and chewing.",
    },
    {
      id: 7,
      category: "Toys",
      name: "Ball Rubber Small Chew Toy",
      price: 132.99,
      image: dogtoy3,
      description: "Treat Dispensing Ball Rubber Small Chew Toy.",
    },
    {
      id: 9,
      category: "Grooming",
      name: "Dogs Grooming Kit",
      price: 679.99,
      image: doggroom1,
      description:
        "Dog Shampoo Brush 80ml, Nail Cutter, Tooth Brush and Glove for Puppy, Cat and Kitten – Combo of 4.",
    },
    {
      id: 10,
      category: "Grooming",
      name: "RENESMEE",
      price: 679.99,
      image: doggroom2,
      description:
        "Dematting Comb for Dog & Cat, Pet Grooming Rake and Brushes for all Hair Types.",
    },
    {
      id: 11,
      category: "Grooming",
      name: "Dog Shampoo",
      price: 679.99,
      image: doggroom3,
      description: "Pet 5-in-1 Grooming Combo for Dogs, Cats, and Puppies.",
    },
    {
      id: 13,
      category: "Health",
      name: "Homeopathy Medicines for Dogs",
      price: 322.99,
      image: doghealth1,
      description: "Natural Solutions for Common Canine Ailments.",
    },
    {
      id: 14,
      category: "Health",
      name: "Entero Chronic",
      price: 322.99,
      image: doghealth2,
      description:
        "Vivaldis Entero Chronic Pre Probiotics Gut Health Powder for Dogs and Cats.",
    },
    {
      id: 15,
      category: "Health",
      name: "The K9 Store",
      price: 322.99,
      image: doghealth3,
      description:
        "The K9 Store Prebiotics & Probiotics for Dogs & Cats - Dog Gut Health Supplement.",
    },
    {
      id: 16,
      category: "Health",
      name: "2Pcs Dog Toothbrush",
      price: 322.99,
      image: doghealth4,
      description:
        "Zibuyu 2Pcs Dog Toothbrush with Tongue Scraper & Storage Box.",
    },
    {
      id: 17,
      category: "Accessories",
      name: "Tie-Out Cable",
      price: 214.99,
      image: dogaccessories1,
      description:
        "Keep your dog in a designated area with the AmazonBasics Tie-Out Cable (41kg/7.6m).",
    },
    {
      id: 18,
      category: "Accessories",
      name: "Vigourholistic Pet Dog Mask",
      price: 214.99,
      image: dogaccessories2,
      description:
        "Size-5 Dog Muzzle for Large Breeds, secure & comfortable fit for bigger snouts.",
    },
    {
      id: 19,
      category: "Accessories",
      name: "PetVogue Dog Harness",
      price: 214.99,
      image: dogaccessories3,
      description:
        "SMALL DOG HARNESS for ~5-9 kg dogs. Perfect for Yorkie, Chihuahua, Pug, etc.",
    },
  ];

  // Biodegradable products
  const biodegradableProducts = [
    {
      id: 90,
      category: "Biodegradable",
      name: "Kolan Biodegradable Pet Wipes",
      price: 415.99,
      image: dogbio1,
      description:
        "Say Goodbye to Dirt and Bacteria with Kolan Pet Wipes (60pcs).",
    },
    {
      id: 91,
      category: "Biodegradable",
      name: "BarkButler x FOFOS Poop Bag Refills",
      price: 318.99,
      image: dogbio2,
      description:
        "Made from resin for a more eco-friendly disposal. Each bag measures 32 x 23 cm.",
    },
    {
      id: 92,
      category: "Biodegradable",
      name: "PetVit Pet Sanitizer With Neem Oil",
      price: 318.99,
      image: dogbio3,
      description:
        "Alcohol-free sanitizer with citronella, neem & eucalyptus oils—safe for daily use.",
    },
  ];

  // We want to show these main categories in the listing
  const categoryNames = ["Food", "Toys", "Grooming", "Health", "Accessories"];

  return (
    <>
    <ToastContainer/>
    <Container className="mt-4">
      {/* Slideshow Carousel */}
      <Carousel className="mb-5">
        {slideshowImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{ objectFit: "cover", height: "400px" }}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Category Boxes (anchor links) */}
      <Row className="mb-5">
        {/* Directly define boxes without using the unused variable */}
        <Col md={2} sm={4} xs={6} className="mb-3">
          <a href="#Food" className="text-decoration-none text-dark">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={foodc}
                alt="Food"
                style={{ height: "100px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h6">Food</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <a href="#Toys" className="text-decoration-none text-dark">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={toysc}
                alt="Toys"
                style={{ height: "100px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h6">Toys</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <a href="#Grooming" className="text-decoration-none text-dark">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={groomc}
                alt="Grooming"
                style={{ height: "100px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h6">Grooming</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <a href="#Health" className="text-decoration-none text-dark">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={healthc}
                alt="Health"
                style={{ height: "100px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h6">Health</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <a href="#Accessories" className="text-decoration-none text-dark">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={assec}
                alt="Accessories"
                style={{ height: "100px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="h6">Accessories</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <a href="#Biodegradable" className="text-decoration-none text-dark">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={bioc}
                alt="Biodegradable"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className="h6">Biodegradable</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>

      <h2 className="mb-4">Dog Products</h2>

      {/* Main categories */}
      {categoryNames.map((category) => (
        <div key={category} className="mb-5" id={category}>
          <h3 className="mb-3">{category}</h3>
          <Row>
            {productData
              .filter((product) => product.category === category)
              .map((product) => (
                <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
                  <Card className="h-100 d-flex flex-column shadow-sm">
                    {/* Image box with fixed height */}
                    <div style={{ height: "180px", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    {/* Body for text */}
                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{ fontSize: "1rem" }}>
                        <Link
                          to={`/product/${product.id}`}
                          className="text-decoration-none text-dark"
                        >
                          {product.name}
                        </Link>
                      </Card.Title>
                      <Card.Text style={{ flex: "1 1 auto", fontSize: "0.85rem" }}>
                        {product.description}
                      </Card.Text>
                      <Card.Text style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                        ₹{product.price.toFixed(2)}
                      </Card.Text>
                    </Card.Body>
                    {/* Add to Cart pinned at bottom */}
                    <div className="p-2 border-top text-center">
                      <Button
                        variant="primary"
                        style={{ width: "100%" }}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      ))}

      {/* Biodegradable Section */}
      <div className="mb-5" id="Biodegradable">
        <h3 className="mb-3">Biodegradable Products</h3>
        <Row>
          {biodegradableProducts.map((product) => (
            <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="h-100 d-flex flex-column shadow-sm">
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ fontSize: "1rem" }}>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {product.name}
                    </Link>
                  </Card.Title>
                  <Card.Text style={{ flex: "1 1 auto", fontSize: "0.85rem" }}>
                    {product.description}
                  </Card.Text>
                  <Card.Text style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    ₹{product.price.toFixed(2)}
                  </Card.Text>
                </Card.Body>
                <div className="p-2 border-top text-center">
                  <Button
                    variant="primary"
                    style={{ width: "100%" }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    </>

  );
}

export default DogProducts;
