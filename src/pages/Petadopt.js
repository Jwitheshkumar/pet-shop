// src/pages/PetAdoption.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Carousel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function PetAdoption() {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("All");
  const [adoptionRequest, setAdoptionRequest] = useState({ name: "", contact: "", petId: null });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (pet) => {
    const updatedFavs = [...favorites, pet];
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    alert(`${pet.name} added to favorites!`);
  };

  const handleAdoptionRequest = (petId) => {
    setAdoptionRequest({ ...adoptionRequest, petId });
    alert("Adoption request submitted!");
  };

  const slideshowImages = [
    {
      src: "/pet-shop/src/images/cutedog.webp",
      alt: "Adoption Process",
      caption: "Find Your Furry Friend Today!",
    },
    {
      src: "https://via.placeholder.com/1200x400?text=Give+Them+a+Home",
      alt: "Give Them a Home",
      caption: "Pets Deserve Love Too!",
    },
  ];

  const adoptablePets = [
    { id: 201, name: "Buddy", type: "Dog", image: "https://via.placeholder.com/300x200?text=Adopt+Buddy", description: "A friendly, playful dog." },
    { id: 202, name: "Whiskers", type: "Cat", image: "https://via.placeholder.com/300x200?text=Adopt+Whiskers", description: "A calm, affectionate cat." },
    { id: 203, name: "Chirpy", type: "Bird", image: "https://via.placeholder.com/300x200?text=Adopt+Chirpy", description: "A colorful parakeet." },
  ];

  return (
    <Container className="mt-4">
      <Carousel className="mb-5">
        {slideshowImages.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={slide.src} alt={slide.alt} />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="mb-4">Pet Adoption</h2>
      
      <Form.Select onChange={(e) => setFilter(e.target.value)} className="mb-4">
        <option value="All">All Pets</option>
        <option value="Dog">Dogs</option>
        <option value="Cat">Cats</option>
        <option value="Bird">Birds</option>
      </Form.Select>

      <Row>
        {adoptablePets.filter(pet => filter === "All" || pet.type === filter).map((pet) => (
          <Col md={4} key={pet.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={pet.image} alt={pet.name} />
              <Card.Body>
                <Card.Title>
                  <Link to={`/adopt/${pet.id}`} className="text-decoration-none text-dark">{pet.name}</Link>
                </Card.Title>
                <Card.Text>{pet.description}</Card.Text>
                <Button variant="success" onClick={() => addToFavorites(pet)}>Add to Favorites</Button>
                <Button variant="primary" className="ms-2" onClick={() => handleAdoptionRequest(pet.id)}>Adopt Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5">Adoption Inquiry</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setAdoptionRequest({ ...adoptionRequest, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Information</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone/email" onChange={(e) => setAdoptionRequest({ ...adoptionRequest, contact: e.target.value })} />
        </Form.Group>
        <Button variant="primary" onClick={() => alert("Adoption request sent!")}>Submit Request</Button>
      </Form>
    </Container>
  );
}

export default PetAdoption;
