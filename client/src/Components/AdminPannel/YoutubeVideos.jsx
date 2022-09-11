import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./AdminPannel.css";
import YoutubeCard from "../YoutubeCard/Youtube";
import { addYoutube, getUser } from "../../actions/user";
import { Helmet } from "react-helmet";

function YoutubeVideos() {
  const { message: loginMessage } = useSelector((state) => state.login);
  const { message, error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  //const alert = useAlert();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addYoutube(url, title, image));
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
        <title>Syed Muhemin Ali || Explore Youtube Videos</title>
        <meta
          name="description"
          content="Hi, I'am a Mern Stack Developer || Front End Developer || Backend Developer || Ui/Ux Designer || Explore New Data With YoutubeVideos"
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
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs1"
          />
          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
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
            user.youtube.map((item) => (
              <YoutubeCard
                key={item._id}
                url={item.url}
                title={item.title}
                image={item.image.url}
                isAdmin={true}
                id={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
