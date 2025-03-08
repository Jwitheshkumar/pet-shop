// src/pages/PetDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function PetDetails() {
  const { id } = useParams();

  const allPets = [
    {
      id: 201,
      name: "Buddy",
      type: "Dog",
      age: 2,
      breed: "Golden Retriever",
      image: "https://via.placeholder.com/300x200?text=Buddy",
      guidelines: `
1) Provide fresh water throughout the day to keep Buddy hydrated.
2) Take Buddy for at least two daily walks for exercise and mental stimulation.
3) Brush Buddy’s coat 2-3 times a week to reduce shedding and maintain healthy fur.
4) Schedule regular vet checkups and keep vaccinations up to date.
5) Use positive reinforcement training to encourage good behavior and strengthen your bond.
6) Offer safe chew toys to promote dental health and prevent boredom.
7) Keep Buddy in a comfortable, temperature-controlled environment, especially in hot weather.
8) Socialize Buddy with other dogs and people early on to foster good manners.
9) Provide a balanced, high-quality diet suitable for Buddy’s size and activity level.
10) Maintain a consistent routine for feeding, walking, and bedtime.
11) Supervise Buddy around small children to ensure safe, respectful interactions.
12) Offer mental puzzles or treat-dispensing toys to keep Buddy’s mind sharp.
13) Use a secure leash or fenced yard to prevent Buddy from wandering off.
14) Regularly clean Buddy’s bedding and living area to avoid pests or odors.
15) Show Buddy love and affection daily—positive attention is crucial for a happy pup.
      `,
      // Expanded precautions for Buddy
      precautions: `
1) Buddy can overheat easily in hot weather; watch for heavy panting.
2) Avoid strenuous exercise in midday sun to prevent heatstroke.
3) Keep toxic substances (like chocolate or cleaning agents) out of reach.
4) Watch for fleas, ticks, or skin irritations; schedule vet checks regularly.
5) Ensure Buddy doesn't ingest small objects or children's toys.
      `,
      // Expanded diet details
      diet: `
1) High-protein dog food tailored to Buddy's activity level.
2) Occasional dog-friendly treats (avoid excessive table scraps).
3) Plenty of fresh water at all times.
4) Incorporate vet-approved fruits/veggies (e.g., carrots) for variety.
5) Monitor weight to avoid obesity; follow recommended feeding portions.
      `,
      // Buddy's favorite products
      favoriteProducts: [
        "Squeaky Bone Toy",
        "Chew Rope",
        "Interactive Puzzle Feeder",
        "Tennis Balls",
        "Plush Comfort Bed",
      ],
    },
    {
      id: 202,
      name: "Whiskers",
      type: "Cat",
      age: 3,
      breed: "Siamese",
      image: "https://via.placeholder.com/300x200?text=Whiskers",
      guidelines: `
1) Provide fresh, clean water daily and replace it at least once a day.
2) Offer a balanced, high-quality cat food tailored to Whiskers’ age and health needs.
3) Scoop the litter box at least once a day, fully replacing litter weekly.
4) Give Whiskers a comfortable, quiet place to nap—cats sleep up to 16 hours a day.
5) Keep Whiskers indoors or in a secure outdoor enclosure to protect from predators.
6) Provide scratching posts to satisfy natural scratching instincts and protect furniture.
7) Schedule routine vet visits for vaccinations, deworming, and checkups.
8) Use interactive toys or laser pointers for daily play sessions to keep Whiskers active.
9) Ensure windows are secured or have screens to prevent accidental escapes.
10) Brush Whiskers’ coat weekly to reduce hairballs and maintain healthy fur.
11) Respect Whiskers’ personal space—many cats dislike excessive handling.
12) Provide vertical spaces like cat trees or shelves for climbing and observation.
13) Offer puzzle feeders or treat balls to stimulate Whiskers’ mind.
14) Consider microchipping for added safety in case Whiskers ever slips out.
15) Spend quality time petting and talking to Whiskers; cats thrive on gentle companionship.
      `,
      precautions: "Easily stressed by loud noises; provide hiding spots and calm environment.",
      diet: "High-quality cat food, occasional cat-safe treats, and plenty of water.",
    },
    {
      id: 203,
      name: "Chirpy",
      type: "Bird",
      age: 1,
      breed: "Parakeet",
      image: "https://via.placeholder.com/300x200?text=Chirpy",
      guidelines: `
1) Place Chirpy’s cage in a draft-free area with consistent, comfortable temperatures.
2) Provide a spacious cage with multiple perches at varying heights.
3) Clean and refill Chirpy’s water dish daily to maintain hygiene.
4) Use a cage liner or newspaper and change it every day to keep the cage clean.
5) Offer a balanced seed mix supplemented with fresh fruits and vegetables.
6) Allow Chirpy supervised flight time in a safe, enclosed room if possible.
7) Schedule periodic vet visits for beak and nail trims, plus overall health checks.
8) Avoid placing the cage in the kitchen where fumes or smoke could harm Chirpy.
9) Provide bird-safe toys to encourage foraging and prevent boredom.
10) Gently cover the cage at night to ensure Chirpy gets 10-12 hours of rest.
11) Watch for signs of stress such as feather plucking or excessive squawking.
12) Socialize gently; many birds enjoy interacting with calm, patient humans.
13) Keep toxic houseplants, scented candles, and Teflon cookware away from Chirpy.
14) Offer a shallow birdbath or misting for occasional bathing.
15) Speak softly and consistently; many birds respond well to kind, repetitive words.
      `,
      precautions: "Sensitive to fumes and sudden temperature changes.",
      diet: "Seed mix, fresh produce, occasional millet spray, and constant fresh water.",
    },
  ];

  const pet = allPets.find((p) => p.id === Number(id));

  if (!pet) {
    return (
      <Container className="mt-4">
        <h3>Pet not found!</h3>
      </Container>
    );
  }

  const handleAdopt = () => {
    alert(`You have adopted ${pet.name}!`);
  };

  return (
    <Container className="mt-4">
      {/* First row: Pet photo + Basic details + Adopt button */}
      <Row>
        <Col md={6}>
          <img
            src={pet.image}
            alt={pet.name}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        <Col md={6}>
          <h2>{pet.name}</h2>
          <p><strong>Type:</strong> {pet.type}</p>
          <p><strong>Age:</strong> {pet.age} years old</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <Button variant="primary" onClick={handleAdopt}>
            Adopt {pet.name}
          </Button>
        </Col>
      </Row>

      {/* Second row: Guidelines, Precautions, Diet, and Favorite Products */}
      <Row className="mt-4">
        <Col>
          <h4>Guidelines</h4>
          <p style={{ whiteSpace: "pre-line" }}>{pet.guidelines.trim()}</p>

          <h4>Precautions</h4>
          <p style={{ whiteSpace: "pre-line" }}>{pet.precautions}</p>

          <h4>Diet</h4>
          <p style={{ whiteSpace: "pre-line" }}>{pet.diet}</p>

          {pet.favoriteProducts && (
            <>
              <h4>Favorite Products</h4>
              <ul>
                {pet.favoriteProducts.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PetDetails;
