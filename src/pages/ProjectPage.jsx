import { useParams } from "react-router-dom";
import Btn from "../components/btnGithub/Btn";
import { projects } from "../helpers/projectsList";

const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id];
    
    return(
        <>
         <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt="project.title" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                {project.gitHubLink && (
                <Btn link = 'https://github.com/Sardor-web-dev'/>
                )}
            </div>
        </div>
    </main>
        </>
    )
}

export default ProjectPage;