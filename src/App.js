// src/App.js
import React, { useState, useEffect, createContext, useContext  } from "react";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// Components
import Navbar from "./components/Navbar";   // Your custom Navbar with search
import Footer from "./components/Footer";


// Pages
import Home from "./pages/Home";
import DogProducts from "./pages/DogProducts";
import CatProducts from "./pages/CatProducts";
import BirdProducts from "./pages/BirdProducts";
import FishProducts from "./pages/FishProducts";
import ProductDetails from "./pages/ProductDetails";
import Petadopt from "./pages/Petadopt";    // Ensure file is Petadopt.js
import PetDetails from "./pages/Petdeatails"; // Ensure file is Petdeatails.js
import SignIn from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import SearchResults from "./pages/SearchResults"; // The file from your search logic

// Create a context for Auth
export const AuthContext = createContext(null);

// Helper hook to get current user from context
export function useAuth() {
  return useContext(AuthContext);
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Listen for user login/logout (Firebase Auth)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // user is null if signed out
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      <Router>
        <Navbar />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />

          {/* Products routes */}
          <Route path="/dog-products" element={<DogProducts />} />
          <Route path="/cat-products" element={<CatProducts />} />
          <Route path="/bird-products" element={<BirdProducts />} />
          <Route path="/fish-products" element={<FishProducts />} />

          {/* Product details */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Pet adoption */}
          <Route path="/petadopt" element={<Petadopt />} />
          <Route path="/adopt/:id" element={<PetDetails />} />

          {/* Search route */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<Navigate to ="/"></Navigate>} />
        </Routes>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
