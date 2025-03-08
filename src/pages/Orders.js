// src/pages/Orders.js
import React, { useState, useEffect } from "react";
import { Container, Table, Badge, Button } from "react-bootstrap";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: Fetch orders from your backend or localStorage
    // e.g., fetch("/api/orders")
    //   .then(res => res.json())
    //   .then(data => setOrders(data));
  }, []);

  const handleTrackOrder = (orderId) => {
    // TODO: Integrate tracking functionality
    alert(`Tracking order: ${orderId} (placeholder)`);
  };

  const handleCancelOrder = (orderId) => {
    // TODO: Integrate cancellation logic
    alert(`Canceling order: ${orderId} (placeholder)`);
  };

  const handleViewInvoice = (orderId) => {
    // TODO: Integrate invoice viewing or PDF generation
    alert(`Viewing invoice for order: ${orderId} (placeholder)`);
  };

  return (
    <Container className="mt-5 pt-5">
      <h2 className="mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>You currently have no orders.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Total (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.date}</td>
                <td>{order.paymentMethod || "N/A"}</td>
                <td>
                  {/* Example statuses: 'Processing', 'Shipped', 'Delivered' */}
                  {order.status === "Shipped" ? (
                    <Badge bg="success">Shipped</Badge>
                  ) : order.status === "Delivered" ? (
                    <Badge bg="info">Delivered</Badge>
                  ) : order.status === "Processing" ? (
                    <Badge bg="warning" text="dark">
                      Processing
                    </Badge>
                  ) : (
                    <Badge bg="secondary">Pending</Badge>
                  )}
                </td>
                <td>{order.total}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleTrackOrder(order.orderId)}
                    >
                      Track
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleViewInvoice(order.orderId)}
                    >
                      Invoice
                    </Button>
                    {/* Allow cancellation if not yet shipped or delivered */}
                    {order.status !== "Delivered" && order.status !== "Shipped" && (
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleCancelOrder(order.orderId)}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Orders;
