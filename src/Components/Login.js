import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
       name: name,
        email: email,
        password: password,
        loggedIn: true,
      }) 
    );
  };
  return (
    <div className="Login">
      <form className="Login-form" onSubmit={(e) => handelSubmit(e)}>
        <h1>*** Login page ***</h1>
        Name:
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Email:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button-btn" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
