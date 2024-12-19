import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png'
import ProjectCard from "../../common/ProjectCard.jsx";

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={viberr} link="https://github.com/lukasz-cpu" h3="Viberr" p="Streaming app"/>
                <ProjectCard src={viberr} link="https://github.com/lukasz-cpu" h3="Viberr" p="Streaming app"/>
            </div>
        </section>
    );
};

export default Projects;