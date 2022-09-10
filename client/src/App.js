import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import AdminPannel from "./Components/AdminPannel/AdminPannel";
import Timeline from "./Components/AdminPannel/Timeline";
import YoutubeVideos from "./Components/AdminPannel/YoutubeVideos";
import Projects from "./Components/AdminPannel/Project";
import Loader from "./Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getUser, LoadUser } from "./actions/user";
import { Helmet } from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(LoadUser());
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Helmet>
            <title>Syed Muhemin Ali</title>
            <meta
              name="description"
              content="Hi, I'am a Mern Stack Developer || Front End Developer || Backend Developer || Ui/Ux Designer"
            />
            <meta
              name="keyword"
              content="portfolio, html, css, javascript, react.js, redux.js, firebase, graphql, node.js, express.js, mongodb, developer"
            />
          </Helmet>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  timelines={user.timeline}
                  youtubes={user.youtube}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About about={user.about} />} />
            <Route
              path="/projects"
              element={<Project projects={user.projects} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPannel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <YoutubeVideos /> : <login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Projects /> : <login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
