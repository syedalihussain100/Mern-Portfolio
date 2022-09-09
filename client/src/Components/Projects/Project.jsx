import React from "react";
import "./Project.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  tchnologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="project" />
          <Typography variant="h5" className="projectTitle">
            {projectTitle}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">About Projects</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {tchnologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => handleDelete(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

function Project({ projects }) {
  console.log("projects", projects);
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="project_wrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            tchnologies={item.techStack}
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above And Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
}

export default Project;

/*  


     id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            tchnologies={item.techStack}

            */
