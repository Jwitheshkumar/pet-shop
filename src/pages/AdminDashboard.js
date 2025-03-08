import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Form,
  Table,
  
} from "react-bootstrap";

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "user" });

  useEffect(() => {
    // Fetch data from backend
    fetch("/api/users").then((res) => res.json()).then(setUsers);
    fetch("/api/orders").then((res) => res.json()).then(setOrders);
    fetch("/api/products").then((res) => res.json()).then(setProducts);
  }, []);

  const handleUserRegister = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => res.json()).then((data) => setUsers([...users, data]));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light vh-100 p-3">
          <h5 className="mb-4">Admin Dashboard</h5>
          <ListGroup>
            <ListGroup.Item action active={activeSection === "dashboard"} onClick={() => setActiveSection("dashboard")}>
              Dashboard Overview
            </ListGroup.Item>
            <ListGroup.Item action active={activeSection === "orders"} onClick={() => setActiveSection("orders")}>
              Order Management
            </ListGroup.Item>
            <ListGroup.Item action active={activeSection === "products"} onClick={() => setActiveSection("products")}>
              Product Management
            </ListGroup.Item>
            <ListGroup.Item action active={activeSection === "users"} onClick={() => setActiveSection("users")}>
              User Management
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={10} className="p-4">
          {activeSection === "dashboard" && <h4>Dashboard Overview</h4>}

          {activeSection === "orders" && (
            <div>
              <h4>Order Management</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.status}</td>
                      <td>{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          {activeSection === "products" && (
            <div>
              <h4>Product Management</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Inventory</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.inventory}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          {activeSection === "users" && (
            <div>
              <h4>User Management</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h5 className="mt-4">Register New User</h5>
              <Form onSubmit={handleUserRegister}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Control as="select" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Form.Control>
                </Form.Group>
                <Button className="mt-3" type="submit">Register</Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
