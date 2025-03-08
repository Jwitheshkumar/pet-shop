// src/components/NavigationBar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../App"; // or wherever your AuthContext is
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function NavigationBar() {
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // State for showing/hiding navbar on scroll
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scrolling to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll down, hide. If we scroll up, show.
      if (window.scrollY > lastScrollY) {
        // scrolled down
        setShowNav(false);
      } else {
        // scrolled up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  // Sign out logic (Firebase)
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Inline styles for show/hide animation
  const navStyle = {
    transform: showNav ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 9999, // Ensure navbar is above other elements
  };

  return (
    <div style={navStyle}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pet Paradise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/petadopt">
                PetAdopt
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>

            

            <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
            </Nav>



            {/* Search form on the right side */}
            <form className="d-flex ms-3" onSubmit={handleSearch}>
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
