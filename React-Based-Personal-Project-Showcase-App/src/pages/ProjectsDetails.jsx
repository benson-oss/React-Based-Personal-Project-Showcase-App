import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { getBeer } from "../API/Projects.js";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getBeer(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="error-message">
        <h2>Project not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="project-details">
      <button onClick={() => navigate(-1)}>← Back</button>

      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
        />

        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <p>
          <strong>Category:</strong> {project.category}
        </p>

        <p>
          <strong>Date:</strong> {project.date}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;