import React, { useState, useEffect } from "react";
import "./AdminPannel";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import { Helmet } from "react-helmet";

function Timeline() {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const { message: loginMessage } = useSelector((state) => state.login);
  const { message, error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTimeline(title, description, date));
    dispatch(getUser());
  };

  const deleteHanlder = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());
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
    if (loginMessage) {
      window.alert(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, alert, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <Helmet>
        <title>Syed Muhemin Ali || Explore Timeline</title>
        <meta
          name="description"
          content="Hi, I'am a Mern Stack Developer || Front End Developer || Backend Developer || Ui/Ux Designer || Explore New Data With Timeline"
        />
        <meta
          name="keyword"
          content="portfolio, html, css, javascript, react.js, redux.js, firebase, graphql, node.js, express.js, mongodb, developer"
        />
      </Helmet>
      <div className="adminPanelContainer">
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

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs1"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs1"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="adminPanelInputs1"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>
        <div className="adminPanelYoutubeVideos">
          {user &&
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: "600px" }}>
                  {item.date.toString().split("T")[0]}
                </Typography>
                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHanlder(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
