import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { useAlert } from "react-alert";


function Login() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(name, email, password));

    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch]);
  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="adminPanelInputs"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="adminPanelInputs"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="adminPanelInputs"
            />
            <Button type="submit" variant="contained" disabled={loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
