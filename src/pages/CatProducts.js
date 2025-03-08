// src/pages/CatProducts.js
import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

import { database } from "../firebase";

import { get , set  , ref } from "firebase/database";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import cutecat1 from "../images/cutecat1.webp";
import cutecat2 from "../images/cutecat2.webp";
import cutecat3 from "../images/cutecat3.webp";
// Local images for categories
import foodc from "../images/foodc.jpg";
import toysc from "../images/toysc.jpg";
import bioc from "../images/bioc.jpg";
import assec from "../images/assec.jpg";
import groomc from "../images/groomc.jpg";
import healthc from "../images/healthc.jpg";

// Local images for products
import catfood4 from "../images/catfood4.jpg";
import catfood2 from "../images/catfood2.jpg";
import catfood1 from "../images/catfood1.jpg";
import catfood3 from "../images/catfood3.jpg";
import cattoy1 from "../images/cattoy1.jpg";
import cattoy2 from "../images/cattoy2.jpg";
import cattoy3 from "../images/cattoy3.jpg";
import cattoy4 from "../images/cattoy4.jpg";
import catgroom1 from "../images/catgroom1.jpg";
import catgroom2 from "../images/catgroom2.jpg";
import catgroom3 from "../images/catgroom3.jpg";
import cataccessories1 from "../images/cataccessories1.jpg";
import cataccessories2 from "../images/cataccessories2.jpg";
import cataccessories3 from "../images/cataccessories3.jpg";
import cataccessories4 from "../images/cataccessories4.jpg";
import cathealth1 from "../images/cathealth1.jpg";
import cathealth2 from "../images/cathealth2.jpg";
import cathealth3 from "../images/cathealth3.jpg";
import cathealth4 from "../images/cathealth4.jpg";
import { AuthContext } from "../services/AuthContext";

function CatProducts() {

  
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

    if(user && user?.uid)
    {

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

   
  };

  // Slideshow images for cats
  const catSlideshowImages = [
    {
      src: cutecat1,
      alt: "Premium Cat Food",
      caption: "Premium Cat Food for Healthy Cats",
    },
    {
      src: cutecat2,
      alt: "Quality Cat Toys",
      caption: "Fun & Durable Cat Toys",
    },
    {
      src: cutecat3,
      alt: "Best Cat Accessories",
      caption: "Stylish Accessories for Your Cat",
    },
  ];

  // Categories (including Biodegradable) for top-level boxes
  const categories = [
    {
      name: "Food",
      route: "Food",
      image: foodc,
    },
    {
      name: "Toys",
      route: "Toys",
      image: toysc,
    },
    {
      name: "Grooming",
      route: "Grooming",
      image: groomc,
    },
    {
      name: "Health",
      route: "Health",
      image: healthc,
    },
    {
      name: "Accessories",
      route: "Accessories",
      image: assec,
    },
    {
      name: "Biodegradable",
      route: "Biodegradable",
      image: bioc,
    },
  ];

  // Sample data for cat products (including biodegradable)
  const productData = [
    // Regular cat items
    {
      id: 101,
      category: "Food",
      name: "Premium Dry Food for Adult Persian Cats",
      price: 200.99,
      image: catfood2,
      description: "Give your Persian cat the best nutrition with our specially formulated dry food designed to meet their unique dietary needs.",
    },
    {
      id: 102,
      category: "Food",
      name: "Delicious Chicken in Gravy Wet Food for Cats",
      price: 155.99,
      image: catfood4,
      description: "A Wholesome, Protein-Packed Meal for Happy & Healthy Cats",
    },
    {
      id: 103,
      category: "Food",
      name: "Premium Ocean Fish Dry Food for Adult Cats",
      price: 155.99,
      image: catfood3,
      description: "A Wholesome, Nutrient-Rich Diet for Cats of All Breeds",
    },
    {
      id: 104,
      category: "Food",
      name: "Farmina Vet Life Rena",
      price: 155.99,
      image: catfood1,
      description: "Specialized Dietetic Food for Cats,Support Your Cat’s Kidney Health with a Scientifically Formulated Renal Diet",
    },
    {
      id: 105,
      category: "Toys",
      name: "Catnip mouse Toy",
      price: 47.99,
      image: cattoy4,
      description: "Fun toy infused with catnip to keep your cat entertained.",
    },
    {
      id: 106,
      category: "Toys",
      name: "Interactive Floppy Fish Toy for Cats",
      price: 50.14,
      image: cattoy1,
      description: "Keep your feline friend entertained with this realistic, motion-activated fish toy!",
    },
    {
      id: 107,
      category: "Toys",
      name: "Matatabi Wood Interactive Dental Toy ",
      price: 50.14,
      image: cattoy2,
      description: "A Fun & Healthy Way to Keep Your Cat Engaged!",
    },
    {
      id: 108,
      category: "Toys",
      name: "Interactive Suction Cup Spinner Toy",
      price: 50.14,
      image: cattoy3,
      description: "Engage, Entertain & Stimulate Your Cat with This Exciting Interactive Toy!",
    },
    {
      id: 109,
      category: "Grooming",
      name: "Cat Brush",
      price: 122.99,
      image: catgroom1,
      description: "2-in-1 Shampoo Dispenser & Pet Massage Brush Make Bath Time a Breeze for Your Furry Friend!"
    },
    {
      id: 110,
      category: "Grooming",
      name: "Pet Massage Comb ",
      price: 122.99,
      image: catgroom2,
      description:"Flynovate Pet Massage Comb & Bath Brush – Gentle Grooming & Easy Cleaning!",
    },
    {
      id: 111,
      category: "Grooming",
      name: "Goofy Tails Paw Butter & Hemp Seed Oil",
      price: 122.99,
      image: catgroom3,
      description: "Natural Care for Your Pet’s Skin & Well-BeingGive your pet the ultimate all-natural healing and moisturizing treatment with Goofy Tails Paw Butter and Hemp Seed Oil",
    },
    {
      id: 112,
      category: "Grooming",
      name: "Cat Brush",
      price: 122.99,
      image: "https://via.placeholder.com/300x200?text=Cat+Brush",
      description: "A gentle brush designed to remove loose fur and reduce shedding.",
    },
    {
      id: 113,
      category: "Health",
      name: "Areion Vet Feli D Kitten Deworming ",
      price: 158.99,
      image: cathealth1,
      description: "Areion Vet Feli D Kitten Deworming Suspension is a premium broad-spectrum deworming solution specifically formulated for kittens.",
    },
    {
      id: 114,
      category: "Health",
      name: "Premium Joint Health Supplement for Optimal Mobility",
      price: 158.99,
      image: cathealth2,
      description: "Opus Pet Elite Flex Forte is a high-quality joint support supplement formulated to enhance mobility, flexibility, and overall joint health in cats. ",
    },
    {
      id: 115,
      category: "Health",
      name: "Himpyrin ",
      price: 158.99,
      image: cathealth3,
      description:"Natural Relief for Fever, Inflammation & PainHimpyrin is a clinically tested herbal medicine designed to provide safe and effective relief from fever, inflammation, and pain in dogs and cats. ",
    },
    {
      id: 116,
      category: "Health",
      name: "Easy Pill ",
      price: 158.99,
      image: cathealth4,
      description: "The Tasty & Stress-Free Pill Pocket for Dogs & Cats",
    },
    {
      id: 117,
      category: "Accessories",
      name: "MiCollar",
      price: 158.99,
      image: cataccessories1,
      description: "Keep Your Cat Safe & Always in Reach!Never worry about losing your pet again! MiCollar Cats is an advanced anti-loss tracking collar designed to locate your cat anywhere in the world using Google's Find My Network",
    },
    {
      id: 118,
      category: "Accessories",
      name: "bell",
      price: 158.99,
      image: cataccessories2,
      description: "nsure Your Cat's Safety & Quick Identification!For cat owners, safety is a top priority, especially for free-roaming cats.",
    },
    {
      id: 119,
      category: "Accessories",
      name: "Fluffy’s Luxurious Pet Bed",
      price: 158.99,
      image: cataccessories3,
      description: "Give your pet the gift of ultimate comfort with Fluffy’s Luxurious Pet Bed! Made with high-quality plush fleece and durable polyester filling",
    },
    {
      id: 120,
      category: "Accessories",
      name: "cage",
      price: 158.99,
      image: cataccessories4,
      description: "Ensure safety, security, and comfort for your pet with Chullbull's premium metal cages and plastic crates! Designed with durability, ventilation, and paw protection in mind,",
    },
    // Biodegradable cat items
    {
      id: 190,
      category: "Biodegradable",
      name: "Eco-Friendly Cat Litter",
      price: 414.99,
      image: "https://via.placeholder.com/300x200?text=Eco+Cat+Litter",
      description: "Environmentally safe cat litter that decomposes naturally.",
    },
    {
      id: 191,
      category: "Biodegradable",
      name: "Plant-Based Cat Bowl",
      price: 312.49,
      image: "https://via.placeholder.com/300x200?text=Plant+Based+Cat+Bowl",
      description: "A durable, biodegradable cat bowl made from plant fibers.",
    },
    {
      id: 192,
      category: "Biodegradable",
      name: "Compostable Cat Wipes",
      price: 348.99,
      image: "https://via.placeholder.com/300x200?text=Compostable+Cat+Wipes",
      description: "Gentle cat wipes that break down quickly after disposal.",
    },
    {
      id: 193,
      category: "Biodegradable",
      name: "Organic Cat Shampoo",
      price: 510.99,
      image: "https://via.placeholder.com/300x200?text=Organic+Cat+Shampoo",
      description: "A non-toxic, organic shampoo to keep your cat’s coat healthy.",
    },
    {
      id: 194,
      category: "Biodegradable",
      name: "Sustainable Cat Toy",
      price: 46.99,
      image: "https://via.placeholder.com/300x200?text=Sustainable+Cat+Toy",
      description: "A cat toy crafted from recycled and biodegradable materials.",
    },
  ];

  // The category names for anchor-based sections
  const categoryNames = [
    "Food",
    "Toys",
    "Grooming",
    "Health",
    "Accessories",
    "Biodegradable",
  ];

  return (
    <>
    <ToastContainer/>
    <Container className="mt-4">
      {/* Slideshow Carousel */}
      <Carousel className="mb-5">
        {catSlideshowImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{ height: "400px", objectFit: "contain" }}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="mb-4">Cat Products</h2>

      {/* Category Boxes */}
      <Row className="mb-5">
        {categories.map((cat) => (
          <Col md={2} sm={4} xs={6} className="mb-3" key={cat.name}>
            <a href={`#${cat.route}`} className="text-decoration-none text-dark">
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

      {/* Category Product Listings */}
      {categoryNames.map((category) => (
        <div key={category} className="mb-5" id={category}>
          <h3 className="mb-3">{category}</h3>
          <Row>
            {productData
              .filter((product) => product.category === category)
              .map((product) => (
                // Use smaller columns for a more Amazon-like grid
                <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="h-100 text-center shadow-sm">
                    {/* Link to /product/:id */}
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: "150px", objectFit: "contain" }}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontSize: "1rem" }}>
                          {product.name}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "0.85rem" }}>
                          {product.description}
                        </Card.Text>
                        <Card.Text>
                          <strong>₹{product.price.toFixed(2)}</strong>
                        </Card.Text>
                      </Card.Body>
                    </Link>
                    <Button
                      variant="primary"
                      onClick={() => addToCart(product)}
                      style={{ fontSize: "0.85rem" }}
                      className="m-2"
                    >
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

export default CatProducts;
