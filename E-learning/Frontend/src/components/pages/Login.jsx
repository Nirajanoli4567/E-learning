import React, { useState } from "react";
import "../../css/Login.css";
import Plogin from "../../assets/photoes/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", user)
      .then((res) => {
        console.log("Login successful:", res.data);

        localStorage.setItem("token", res.data.token);

        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <section className="login">
      <div className="row">
        <div className="col">
          <img src={Plogin} alt="login" />
        </div>
        <div className="col">
          <form>
            <h1>Login Page</h1>
            <label htmlFor="email">
              Enter the Email:
              <input
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter the email here..."
              />
            </label>
            <label htmlFor="password">
              Enter the password:
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter the password here"
              />
            </label>
            <button className="btn" type="submit" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
