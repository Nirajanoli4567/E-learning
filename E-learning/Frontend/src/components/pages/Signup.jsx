import React, { useState } from "react";
import signupss from "../../assets/photoes/sign.jpg";
import "../../css/Signup.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
    password: "",
  });

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    const { username, email, address, contact, password } = user;

    if (username && email && address && contact && password) {
      axios.post("http://localhost:8080/register", user).then((res) => {
        console.log(res);
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="row">
          <div className="col">
            <img src={signupss} alt="" />
          </div>
          <div className="col">
            <form method="POST">
              <h1>Sign Up Form</h1>

              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  value={user.username}
                  onChange={inputHandler}
                  placeholder="Enter the username here..."
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  value={user.email}
                  onChange={inputHandler}
                  placeholder="Enter the email here..."
                />
              </label>
              <label htmlFor="address">
                Address:
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  value={user.address}
                  onChange={inputHandler}
                  placeholder="Enter the address here..."
                />
              </label>
              <label htmlFor="contact">
                Contact:
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  required
                  value={user.contact}
                  onChange={inputHandler}
                  placeholder="Enter the contact here..."
                />
              </label>
              <label htmlFor="contact">
                Password:
                <input
                  type="text"
                  name="password"
                  required
                  value={user.password}
                  onChange={inputHandler}
                  placeholder="Enter the contact here..."
                />
              </label>
              <button type="submit" onClick={register}>
                Submit
              </button>
              <p className="or">OR</p>
              <p>
                Already Have An Account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
