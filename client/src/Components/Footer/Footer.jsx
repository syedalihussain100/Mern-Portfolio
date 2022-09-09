import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Syed Muhemin Ali, I am a Mern Stack Developer
          <b className="boldtext">Regards Muhemin :)🔥🔥🔥</b>
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/syedalihussain100" target="black">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/zaid.roy.3386" target="black">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/zaidroy123/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/muheminali/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
