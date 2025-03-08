// src/pages/Home.js
import React, { useState,useContext} from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { AuthContext } from "../services/AuthContext";
import { database } from "../firebase";
import { get, set, ref } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./Home.css";
import dogLogo from "../images/dogLogo.jpg";
import catLogo from "../images/catLogo.jpg";
import birdLogo from "../images/birdLogo.jpg";
import fishLogo from "../images/fishLogo.jpg";

// Slide images and product images
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import dogfood1 from "../images/dogfood1.jpg";
import dogfood2 from "../images/dogfood2.jpg";
import catfood2 from "../images/catfood2.jpg";
import cattoy4 from "../images/cattoy4.jpg";
import birdfood1 from "../images/birdfood1.jpg";
import birdtoy1 from "../images/birdtoy1.jpg";
import dogaccessories1 from "../images/dogaccessories1.jpg";
import dogtoy1 from "../images/dogtoy1.jpg";
import cataccessories1 from "../images/cataccessories1.jpg";
import ecohome1 from "../images/ecohome1.webp";
import ecocatlitter from "../images/ecocatlitter.jpg";
import fishfood1 from "../images/fishfood1.webp";
import ecobirdfeader from "../images/ecobirdfeader.jpeg";

import ecofishcle from "../images/ecofishcle.jpeg";

function Home() {
  const { user, isLoading, logOut, signInWithGoogle } = useContext(AuthContext);
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


    }

  // Slideshow images
  const slideshowImages = [
    { src: slide1, alt: "Bestselling 1", caption: "Our Top-Selling Pet Products" },
    { src: slide2, alt: "Bestselling 2", caption: "Great Deals on Pet Essentials" },
    { src: slide3, alt: "Bestselling 3", caption: "Must-Have Items for Your Furry Friends" },
  ];

  // Best-Selling Boxes
  const bestSellingBoxes = [
    { id: 1, title: "Best Seller #1", image: dogtoy1, text: "This is best selling product #1", price: 225.99 },
    { id: 2, title: "Best Seller #2", image: cataccessories1, text: "This is best selling product #2", price: 115.49 },
    { id: 3, title: "Best Seller #3", image: dogaccessories1, text: "This is best selling product #3", price: 330.0 },
  ];

  // Pet categories (for "Shop by Pet Type")
  const categories = [
    {
      name: "Dogs",
      image: dogLogo,
      link: "/dog-products",
      items: [
        {
          id: 1,
          name: "Drools",
          image: dogfood1,
          price: 225.99,
          description: "Nutritious dry food to keep your dog healthy and active.",
          link: "/dog-products",
        },
        {
          id: 2,
          name: "Dog Toy",
          image: dogfood2,
          price: 122.99,
          description: "Durable chew toy for dogs of all sizes.",
          link: "/dog-products",
        },
      ],
    },
    {
      name: "Cats",
      image: catLogo,
      link: "/cat-products",
      items: [
        {
          id: 3,
          name: "Dry Cat Food",
          image: catfood2,
          price: 200.99,
          description: "High-protein dry food for your feline friend.",
          link: "/cat-products",
        },
        {
          id: 4,
          name: "Cat Toy",
          image: cattoy4,
          price: 75.99,
          description: "Interactive toy to keep your cat engaged.",
          link: "/cat-products",
        },
      ],
    },
    {
      name: "Birds",
      image: birdLogo,
      link: "/bird-products",
      items: [
        {
          id: 5,
          name: "Bird Seed Mix",
          image: birdfood1,
          price: 99.99,
          description: "A nutritious seed mix for all bird species.",
          link: "/bird-products",
        },
        {
          id: 6,
          name: "Bird Swing",
          image: birdtoy1,
          price: 114.99,
          description: "Fun and safe swing for pet birds.",
          link: "/bird-products",
        },
      ],
    },
    {
      name: "Fish",
      image: fishLogo,
      link: "/fish-products",
      items: [
        {
          id: 7,
          name: "optium aquarium fish food ",
          image: fishfood1,
          price: 276.99,
          description: "Nutrient-rich flake food for aquarium fish.",
          link: "/fish-products",
        },
        {
          id: 8,
          name: "Aquarium Decoration",
          image: "/images/fish-decoration.jpg",
          price: 419.99,
          description: "Enhance your aquarium with this beautiful decor.",
          link: "/fish-products",
        },
      ],
    },
  ];

  // Biodegradable products
  const biodegradableProducts = [
    {
      id: 201,
      name: "Eco-Friendly Dog Bowl",
      image: ecohome1,
      price: 215.99,
      description: "A durable and eco-friendly dog bowl made from sustainable materials.",
    },
    {
      id: 202,
      name: "Biodegradable Cat Litter",
      image: ecocatlitter,
      price: 212.49,
      description: "An environmentally safe cat litter that decomposes naturally.",
    },
    {
      id: 203,
      name: "Recycled Bird Feeder",
      image: ecobirdfeader,
      price: 318.99,
      description: "A bird feeder crafted from recycled wood and plastic.",
    },
    {
      id: 204,
      name: "Sustainable Fish Tank Cleaner",
      image: ecofishcle,
      price: 879.99,
      description: "A non-toxic, biodegradable cleaner for aquariums.",
    },
  ];

  return (
    <>
    <ToastContainer/>
    <div className="container mt-5">
      {/* Slideshow Carousel */}
      <div style={{ backgroundColor: "#d4f3d5", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
        <Carousel>
          {slideshowImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.src}
                alt={slide.alt}
                style={{ height: "400px", objectFit: "cover", borderRadius: "10px" }}
              />
              {slide.caption && (
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Best-Selling Boxes */}
      <div className="row mb-5 text-center">
        <h2>Our Best-Selling Items</h2>
        {bestSellingBoxes.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100 shadow-sm">
              <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <p className="text-success">₹{item.price.toFixed(2)}</p>
                </div>
              </Link>
              <div className="card-footer">
                <button className="btn btn-outline-primary me-2" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                <Link to={`/product/${item.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shop by Pet Type */}
      <div className="shop-by-pet-type mb-5 text-center">
        <h2>Shop by Pet Type</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {categories.map((cat, index) => (
            <Link to={cat.link} key={index} className="category-card m-3">
              <img
                src={cat.image}
                alt={cat.name}
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h5 className="mt-2">{cat.name}</h5>
            </Link>
          ))}
        </div>
      </div>

      {/* Biodegradable & Eco-Friendly Products */}
      <div className="biodegradable-products-section text-center mb-5">
        <h2>Biodegradable & Eco-Friendly Products</h2>
        <div className="row">
          {biodegradableProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-3">
              <div className="card h-100">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text text-success">₹{product.price.toFixed(2)}</p>
                  </div>
                </Link>
                <div className="card-footer">
                  <button className="btn btn-outline-primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Product Listings */}
      {categories.map((cat, index) => (
        <div key={index} className="category-products-section mb-5">
          <h3 className="mb-3">{cat.name} Products</h3>
          <div className="row">
            {cat.items.map((item) => (
              <div key={item.id} className="col-md-3 mb-3">
                <div className="card h-100">
                  <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text text-success">₹{item.price.toFixed(2)}</p>
                    </div>
                  </Link>
                  <div className="card-footer">
                    <button className="btn btn-outline-primary me-2" onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;
