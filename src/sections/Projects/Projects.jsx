import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from "../../common/ProjectCard.jsx";

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={viberr} link="https://github.com/lukasz-cpu/Hexagonal-Architecture" h3="Hexagonal Architecture" p="Hexagonal Architecture written in Java"/>
                <ProjectCard src={freshBurger} link="https://github.com/lukasz-cpu/KafkaCrusher" h3="Kafka Crusher" p="Kafka Rest API in Spring Boot"/>
                <ProjectCard src={hipster} link="https://github.com/lukasz-cpu/KafkaCrusher" h3="Spring Cloud Kubernetes Reference Architecture" p="Microservices on Kubernetes"/>
                <ProjectCard src={hipster} link="https://github.com/lukasz-cpu/KafkaCrusher" h3="Spring Cloud Kubernetes Reference Architecture" p="Microservices on Kubernetes"/>
                <ProjectCard src={fitLift} link="https://github.com/lukasz-cpu/KafkaCrusher" h3="Spring Cloud Kubernetes Reference Architecture" p="Microservices on Kubernetes"/>
            </div>
        </section>
    );
};

export default Projects;