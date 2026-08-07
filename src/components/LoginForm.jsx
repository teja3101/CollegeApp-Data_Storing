import React, { useState } from "react";
import { fetchAllUsers } from "../services";

const LoginForm = ({ setCurrentUser, setScreen }) => {

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetchAllUsers();

      const user = res.data.find(
        (u) =>
          u.email === login.email &&
          u.password === login.password
      );

      if (!user) {
        alert("Invalid Email or Password");

        return;
      }

      // Save Logged In User
      setCurrentUser(user);

      alert("Login Successful");

      // Authorization

      if (user.role === "admin") {

        setScreen("admin");

      } else if (user.role === "faculty") {

        setScreen("faculty");

      } else {

        alert("Unauthorized User");

      }

      // Clear Form

      setLogin({
        email: "",
        password: "",
      });

    } catch (err) {

      console.log(err);

      alert("Server Error");

    }
  };

  return (

    <div>

      <h2>Login</h2>

      <form onSubmit={handleSubmit} autoComplete="off">

        <label>Email :</label>

        <input
          type="email"
          name="email"
          value={login.email}
          onChange={handleChange}
          autoComplete="off"
        />

        <br /><br />

        <label>Password :</label>

        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          autoComplete="new-password"
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>

    </div>

  );
};

export default LoginForm;