import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { Helmet } from "react-helmet";

function Login() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const alert = useAlert();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(name, email, password));

    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }

    if (message) {
      window.alert(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch]);
  return (
    <div className="login">
      <Helmet>
        <title>Syed Muhemin Ali || Explore Login</title>
        <meta
          name="description"
          content="Hi, I'am a Mern Stack Developer || Front End Developer || Backend Developer || Ui/Ux Designer || Explore New Data With Login"
        />
        <meta
          name="keyword"
          content="portfolio, html, css, javascript, react.js, redux.js, firebase, graphql, node.js, express.js, mongodb, developer"
        />
      </Helmet>
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
