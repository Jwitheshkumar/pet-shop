// src/pages/SearchResults.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

// Example product data - unify or fetch from an API
const allProducts = [
  // DOG EXAMPLES
  { id: 1, name: "Dry Dog Food", description: "Nutritious dog food", price: 25.99, image: "/images/dog1.jpg" },
  { id: 2, name: "Dog Toy", description: "Durable chew toy", price: 12.99, image: "/images/dog-toy.jpg" },
  // CAT EXAMPLES
  { id: 3, name: "Dry Cat Food", description: "High-protein cat food", price: 20.99, image: "/images/cat1.jpg" },
  { id: 4, name: "Cat Toy", description: "Interactive cat toy", price: 7.99, image: "/images/cat-toy.jpg" },
  // BIRD EXAMPLES
  { id: 5, name: "Bird Seed Mix", description: "Nutritious seed mix", price: 9.99, image: "/images/bird1.jpg" },
  { id: 6, name: "Bird Swing", description: "Fun swing for birds", price: 14.99, image: "/images/bird-swing.jpg" },
  // FISH EXAMPLES
  { id: 7, name: "Flake Fish Food", description: "Nutrient-rich flake food", price: 6.99, image: "/images/fish1.jpg" },
  { id: 8, name: "Aquarium Decoration", description: "Enhance your aquarium", price: 19.99, image: "/images/fish-decoration.jpg" },
];

function SearchResults() {
  // Read ?query= from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  // Filter allProducts by name or description
  const results = allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>
        Search Results for "<em>{query}</em>"
      </h2>
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row">
          {results.map((item) => (
            <div className="col-md-3 mb-3" key={item.id}>
              {/* Wrap the entire card in a Link to /product/:id */}
              <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="text-success">₹{item.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
