import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="card">
            <div className="image-wrapper">
                <img src={project.img} alt={project.title} className="zoom-img" />
            </div>
            <div className="info">
                <h3>{project.title}</h3>
                <span className="category">{project.category}</span>
            </div>
        </Link>
    );
}

export default ProjectCard;