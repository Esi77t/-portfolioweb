import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
    const { id } = useParams();

    // 데이터에서 id가 일치하는 프로젝트 찾기
    const project = projects.find((p) => p.id === id);

    // 프로젝트가 없을 경우 처리
    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <main className="detail-container">
            {/* 헤더 섹션 */}
            <div className="detail-header">
                <div className="title-group">
                    <h1>{project.title}</h1>
                    <p className="category-label">{project.category}</p>
                </div>

                <div className="link-group">
                    <p>{project.link}</p>
                    <p>{project.github}</p>
                </div>
            </div>
            {/* 프로젝트 상세 내용 */}
            <section className="detail-content">
                <div className="main-image">
                    <img src={project.img} alt={project.title} />
                </div>
                <article className="description">
                    <p>{project.description}</p>
                </article>
            </section>

            <Link to="/" className="back-btn">← Back to List</Link>
        </main>
    );
}

export default ProjectDetail;