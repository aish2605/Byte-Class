import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "./login.css"; // Reusing the same CSS

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-box">
          <h2 className="login-title">Create your ByteClass account</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="login-button" variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>

          <div className="login-signup">
            Already have an account? <Link to="/">Log In</Link>
          </div>
        </div>
      </div>

      <div className="login-right">
        <img
          src={`${process.env.PUBLIC_URL}/images/login.jpg`}
          alt="Signup Illustration"
          className="login-image"
        />
      </div>
    </div>
  );
};

export default Signup;
