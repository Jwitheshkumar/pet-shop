import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/AuthContext";

function SignIn() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const { user, isLoading, logOut, signInWithGoogle } = useContext(AuthContext);

  const handleToggle = (role) => {
    setIsAdmin(role === "admin");
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", credentials);
    if (isAdmin) {
      if (credentials.username === "admin" && credentials.password === "admin") {
        alert("✅ Admin login successful!");
        setTimeout(() => navigate("/admin"), 100);
      } else {
        alert("❌ Invalid admin credentials.");
      }
    } else {
      alert("✅ Customer login successful!");
      setTimeout(() => navigate("/home"), 100);
    }
  };

  return (
    <div className="container mt-4">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {user ? (
        <div className="card shadow-sm p-4">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="User Avatar" 
                  className="rounded-circle img-thumbnail shadow"
                  width={120} 
                  height={120}
                />
              ) : (
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{width: 120, height: 120}}>
                  <h1>{user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}</h1>
                </div>
              )}
            </div>
            <div className="col-md-8">
              <h2 className="mb-3">Welcome, {user.displayName || user.email}</h2>
              
              <div className="user-details">
                <p className="mb-1">
                  <strong>Email:</strong> {user.email}
                </p>
                
                {user.emailVerified !== undefined && (
                  <p className="mb-1">
                    <strong>Email verified:</strong> {user.emailVerified ? 
                      <span className="text-success">Yes <i className="bi bi-check-circle-fill"></i></span> : 
                      <span className="text-warning">No <i className="bi bi-exclamation-triangle-fill"></i></span>}
                  </p>
                )}
                
                {user.phoneNumber && (
                  <p className="mb-1">
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                )}
                
                {user.metadata && user.metadata.creationTime && (
                  <p className="mb-1">
                    <strong>Member since:</strong> {new Date(user.metadata.creationTime).toLocaleDateString()}
                  </p>
                )}
                
                {user.providerData && user.providerData.length > 0 && (
                  <p className="mb-1">
                    <strong>Sign-in method:</strong> {user.providerData[0].providerId}
                  </p>
                )}
                
                {isAdmin && (
                  <p className="mb-1">
                    <span className="badge bg-danger">Administrator</span>
                  </p>
                )}
              </div>
              
              <div className="mt-4">
                <button 
                  className="btn btn-primary me-2" 
                  onClick={() => navigate("/profile")}
                >
                  <i className="bi bi-person-fill me-1"></i> View Full Profile
                </button>
                <button 
                  className="btn btn-outline-danger" 
                  onClick={logOut}
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <div className="btn-group mb-3">
            <button
              type="button"
              className={`btn ${!isAdmin ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handleToggle("customer")}
            >
              Customer
            </button>
            <button
              type="button"
              className={`btn ${isAdmin ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handleToggle("admin")}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>

          <div className="mt-3">
            <button className="btn btn-outline-danger" onClick={signInWithGoogle}>
              <i className="bi bi-google me-2"></i>Sign In with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;