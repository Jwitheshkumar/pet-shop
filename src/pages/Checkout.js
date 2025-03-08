// src/pages/Checkout.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table, Card } from "react-bootstrap";

function Checkout() {
  // 1) Load the cart from localStorage (added quantity if needed)
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // 2) Example shipping methods
  const shippingMethods = [
    { id: "ground", name: "Ground Shipping", cost: 5.0, eta: "5-7 days" },
    { id: "air", name: "Air Shipping", cost: 12.0, eta: "2-3 days" },
    { id: "express", name: "Express Shipping", cost: 20.0, eta: "1-2 days" },
  ];

  // 3) Payment methods
  const paymentMethods = ["Credit Card", "PayPal", "UPI"];

  // 4) Form states for shipping address, etc.
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [selectedShippingMethod, setSelectedShippingMethod] = useState("ground");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Credit Card");
  const [discountCode, setDiscountCode] = useState("");
  const [giftCard, setGiftCard] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // 5) Calculate subtotal from cart
  // If your cart items have a 'quantity' field, use item.quantity
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Find shipping cost
  const shippingCost = shippingMethods.find((m) => m.id === selectedShippingMethod)?.cost || 0;

  // Example tax calculation (7%)
  const tax = subtotal * 0.07;

  // Grand total
  const total = (subtotal + shippingCost + tax).toFixed(2);

  // Handlers
  const handleAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleDiscountApply = () => {
    // TODO: Validate discountCode
    alert(`Applied discount code: ${discountCode} (placeholder)`);
  };

  const handleGiftCardApply = () => {
    // TODO: Validate giftCard
    alert(`Applied gift card: ${giftCard} (placeholder)`);
  };

  const handlePlaceOrder = () => {
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions before placing your order.");
      return;
    }


    //order firebase




   
  };

  const handleSaveForLater = () => {
    // TODO: Logic to save order progress in your DB/localStorage
    alert("Order saved for later! (placeholder)");
  };

  return (
    <Container style={{ marginTop: "6rem" }}>
      <h2 className="mb-4">Checkout</h2>

      {/* If cart is empty, show message */}
      {cart.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <>
          {/* 1. Order Summary */}
          <Card className="mb-4">
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price (₹)</th>
                    <th>Subtotal (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity || 1}</td>
                      <td>{item.price.toFixed(2)}</td>
                      <td>{(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row>
                <Col md={{ span: 4, offset: 8 }}>
                  <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                  <p>Tax (7%): ₹{tax.toFixed(2)}</p>
                  <p>Shipping: ₹{shippingCost.toFixed(2)}</p>
                  <h5>Total: ₹{total}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* 2. Shipping Address */}
          <Card className="mb-4">
            <Card.Header>Shipping Address</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={shippingAddress.name}
                        onChange={handleAddressChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={shippingAddress.email}
                        onChange={handleAddressChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={shippingAddress.phone}
                        onChange={handleAddressChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={shippingAddress.address}
                    onChange={handleAddressChange}
                    required
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={shippingAddress.city}
                        onChange={handleAddressChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={shippingAddress.state}
                        onChange={handleAddressChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={shippingAddress.zip}
                        onChange={handleAddressChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleAddressChange}
                    required
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          {/* 3. Shipping Options */}
          <Card className="mb-4">
            <Card.Header>Shipping Options</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group>
                      <div key="shippingMethod" className="mb-3">
                        <Form.Check
                          type="radio"
                          id="ground"
                          label="Ground (5-7 days) - ₹5.00"
                          name="shippingMethod"
                          value="ground"
                          onChange={() => setSelectedShippingMethod("ground")}
                          defaultChecked
                        />
                        <Form.Check
                          type="radio"
                          id="air"
                          label="Air (2-3 days) - ₹12.00"
                          name="shippingMethod"
                          value="air"
                          onChange={() => setSelectedShippingMethod("air")}
                        />
                        <Form.Check
                          type="radio"
                          id="express"
                          label="Express (1-2 days) - ₹20.00"
                          name="shippingMethod"
                          value="express"
                          onChange={() => setSelectedShippingMethod("express")}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          {/* 4. Payment Methods */}
          <Card className="mb-4">
            <Card.Header>Payment Methods</Card.Header>
            <Card.Body>
              <Form>
                <Form.Check
                  type="radio"
                  id="creditCard"
                  label="Credit Card"
                  name="paymentMethod"
                  value="Credit Card"
                  defaultChecked
                  onChange={() => setSelectedPaymentMethod("Credit Card")}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  id="paypal"
                  label="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  onChange={() => setSelectedPaymentMethod("PayPal")}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  id="upi"
                  label="UPI"
                  name="paymentMethod"
                  value="UPI"
                  onChange={() => setSelectedPaymentMethod("UPI")}
                  className="mb-2"
                />
              </Form>
            </Card.Body>
          </Card>

          {/* 5. Discount Codes and Gift Cards */}
          <Card className="mb-4">
            <Card.Header>Discount Codes and Gift Cards</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Label>Discount Code</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Enter code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <Button
                      variant="outline-primary"
                      className="ms-2"
                      onClick={() => {
                        // For now, just alert. 
                        alert(`Applied discount code: ${discountCode}`);
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Label>Gift Card</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Enter gift card"
                      value={giftCard}
                      onChange={(e) => setGiftCard(e.target.value)}
                    />
                    <Button
                      variant="outline-primary"
                      className="ms-2"
                      onClick={() => {
                        alert(`Applied gift card: ${giftCard}`);
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* 9. Order Notes (Optional) */}
          <Card className="mb-4">
            <Card.Header>Order Notes (Optional)</Card.Header>
            <Card.Body>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add any special instructions for your order..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
              />
            </Card.Body>
          </Card>

          {/* 8. Security and Trust Badges (example) */}
          <div className="mb-4 text-center">
            <img
              src="https://via.placeholder.com/100x50?text=SSL"
              alt="SSL Secure"
              className="me-3"
            />
            <img
              src="https://via.placeholder.com/100x50?text=TRUSTe"
              alt="TRUSTe"
              className="me-3"
            />
            <img
              src="https://via.placeholder.com/100x50?text=VeriSign"
              alt="VeriSign"
            />
          </div>

          {/* 6. Terms and Conditions */}
          <Form.Check
            type="checkbox"
            id="agreeToTerms"
            label="I agree to the website's terms and conditions."
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mb-4"
          />

          {/* 10. Save for Later (Optional) */}
          <Button
            variant="outline-secondary"
            className="me-2"
            onClick={() => {
              // Example logic
              alert("Order saved for later! (placeholder)");
            }}
          >
            Save for Later
          </Button>

          {/* 7. Checkout Buttons */}
          <Button
            variant="success"
            onClick={() =>handlePlaceOrder}
          >
            Place Order
          </Button>
        </>
      )}
    </Container>
  );
}

export default Checkout;
