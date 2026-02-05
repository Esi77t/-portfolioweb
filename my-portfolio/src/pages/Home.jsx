import ProjectCard from "../components/ProjcetCard";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const Home = () => {
    return (
        <main className="home-container">
            {/* Hero 섹션 */}
            <section className="hero">
                <h1>Welcome<br />My Portfolio</h1>
            </section>
            {/* Project 섹션 */}
            <section className="section" id="projects">
                <h2 className="section-title">project</h2>
                <div className="grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
            {/* Skills 섹션 */}
            <section className="section" id="skills">
                <h2 className="section-title">skills</h2>
                <div className="grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="card">
                            <div className="image-wrapper">
                            </div>
                            <div className="info">
                                <h3>{skill.name}</h3>
                                <span className="category">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home;