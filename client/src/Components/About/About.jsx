import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

function About({ about }) {
  return (
    <div className="about">
      <Helmet>
        <title>Syed Muhemin Ali || Explore About</title>
        <meta
          name="description"
          content="Hi, I'am a Mern Stack Developer || Front End Developer || Backend Developer || Ui/Ux Designer || Explore New Data With About"
        />
        <meta
          name="keyword"
          content="portfolio, html, css, javascript, react.js, redux.js, firebase, graphql, node.js, express.js, mongodb, developer"
        />
      </Helmet>
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={about.avatar.url}
            alt={about.name}
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>
          <Typography>{about.title}</Typography>
          <Typography style={{ margin: "1vmax 0" }}>
            {about.subtitle}
          </Typography>
        </div>
        <div>
          <Typography className="para">{about.description}</Typography>
        </div>
      </div>
    </div>
  );
}

export default About;
