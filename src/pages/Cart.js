// src/pages/Cart.js
import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";
import { AuthContext } from "../services/AuthContext";



import { get , set  , ref } from "firebase/database";
function Cart() {
  const {user ,  isLoading, logOut, signInWithGoogle } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Load cart from Firebase on mount
    const loadCart = async () => {
      if (user && user.uid) {
        try {
          const snapshot = await get(ref(database, `/${user.uid}`));
          
          if (snapshot.exists() && snapshot.val().updatedCart) {
            setCart(snapshot.val().updatedCart);
          }
        } catch (error) {
          console.error("Error loading cart:", error);
        }
      }
    };
    
    loadCart();
  }, [user]);
  // Remove an item by index
  // const removeFromCart = (index) => {
  //   const updatedCart = cart.filter((_, i) => i !== index);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };
  const removeFromCart = async (index) => {
    try {
      // Create new cart without the item at the specified index
      const updatedCart = cart.filter((_, i) => i !== index);
      
      // Update state
      setCart(updatedCart);
      
      // Update in Firebase (assuming user is authenticated)
      if (user && user.uid) {
        await set(ref(database, `/${user.uid}`), {
          updatedCart
        });
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      // Optionally revert the state change if Firebase update fails
      // setCart(cart);
    }
  };

  // Calculate total price
  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // Handle checkout - go to /checkout
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mt-4">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              className="d-flex justify-content-between align-items-center border-bottom py-2"
              key={index}
            >
              <img src={item.image} alt={item.name} width="80" height="80" />
              <h5>{item.name}</h5>
              <p>₹{item.price.toFixed(2)}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <h4 className="mt-3">Total: ₹{getTotal()}</h4>
          <button className="btn btn-success" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
