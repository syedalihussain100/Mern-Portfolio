import React, { useEffect } from "react";
import * as Three from "three";
import "./Home.css";
import MoonImage from "../Images/moon.jpg";
import VenusImage from "../Images/venus.jpg";
import ShpereImage from "../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/Timeline";
import Youtube from "../YoutubeCard/Youtube";
import { MouseOutlined } from "@mui/icons-material";
import {Link} from "react-router-dom"


import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

function Home({ timelines, youtubes, skills }) {
  useEffect(() => {
    const TextureLoader = new Three.TextureLoader();

    const moonTexture = TextureLoader.load(MoonImage);
    const venusTexture = TextureLoader.load(VenusImage);
    const sphereTexture = TextureLoader.load(ShpereImage);

    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);
    const canvas = document.querySelector(".home_canvas");
    const render = new Three.WebGLRenderer({ canvas });
    //  moon
    const Moongeometry = new Three.SphereGeometry(2, 64, 64);
    const Moonmaterial = new Three.MeshStandardMaterial({ map: moonTexture });
    const moon = new Three.Mesh(Moongeometry, Moonmaterial);
    // venus
    const Venusgeometry = new Three.SphereGeometry(3, 64, 64);
    const Venusmaterial = new Three.MeshBasicMaterial({ map: venusTexture });
    const venus = new Three.Mesh(Venusgeometry, Venusmaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new Three.PointLight(0xffffff, 1);
    const pointLight2 = new Three.PointLight(0xffffff, 0.1);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(venus);
    scene.background = sphereTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      render.setSize(window.innerWidth, window.innerHeight);
      render.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);
  return (
    <div className="home">
      <canvas className="home_canvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>M</p>
          <p>U</p>
          <p>H</p>
          <p>E</p>
          <p>M</p>
          <p>I</p>
          <p>N</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">PROGRAMMER</Typography>
          <Typography variant="h2">SOFTWARE ENGINEER</Typography>
        </div>
        <Link to="/projects">VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="home_container">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className="home_skills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCube_skills">
          <div className="homeCubeSkills_face homeCubeSkills_face1">
            <img src={skills.image1.url} alt="Face1" />
          </div>
          <div className="homeCubeSkills_face homeCubeSkills_face2">
            <img src={skills.image2.url} alt="Face2" />
          </div>
          <div className="homeCubeSkills_face homeCubeSkills_face3">
            <img src={skills.image3.url} alt="Face3" />
          </div>
          <div className="homeCubeSkills_face homeCubeSkills_face4">
            <img src={skills.image4.url} alt="Face4" />
          </div>
          <div className="homeCubeSkills_face homeCubeSkills_face5">
            <img src={skills.image5.url} alt="Face5" />
          </div>
          <div className="homeCubeSkills_face homeCubeSkills_face6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>
        <div className="cube_shadow"></div>
        <div className="homeskillbox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">YOUTUBE CARDS</Typography>
        <div className="homeYoutubeWrapper">
          {youtubes.map((item) => (
            <Youtube
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
